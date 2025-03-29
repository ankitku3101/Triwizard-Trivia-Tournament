"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import easyQuestions from "@/data/questions/easy.json";
import mediumQuestions from "@/data/questions/medium.json";
import hardQuestions from "@/data/questions/hard.json";
import { useSearchParams } from "next/navigation";

export default function GameRoom() {
    const searchParams = useSearchParams();
    const wizardName = searchParams.get("name");
    const level = searchParams.get("level");

  // Fetch questions based on level
  const questions =
    level === "medium" ? mediumQuestions : level === "hard" ? hardQuestions : easyQuestions;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timeLeft, setTimeLeft] = useState(15); // 15s per question
  const [score, setScore] = useState(0);

  // Move to the next question when timer reaches 0
  useEffect(() => {
    if (timeLeft <= 0) {
      nextQuestion();
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  // Handle option selection
  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    if (option === questions[currentQuestion].correctAnswer) {
      setScore(score + 10);
    }
    setTimeout(nextQuestion, 1000); // Move to the next question after 1s
  };

  // Move to next question or finish game
  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setTimeLeft(15);
    } else {
      alert(`Game Over! Your Score: ${score}`);
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <Image
        src="/hogwarts.jpg"
        alt="Hogwarts"
        fill
        className="object-cover opacity-50"
      />

      {/* Game Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
        <h1 className="text-4xl font-bold mb-4">Triwizard Trivia</h1>

        {/* Timer & Question Number */}
        <div className="flex justify-between items-center w-full max-w-lg bg-black/60 p-4 rounded-lg shadow-lg">
          <span className="text-lg">Question {currentQuestion + 1} / {questions.length}</span>
          <span className="text-lg">⏳ {timeLeft}s</span>
        </div>

        {/* Question Box */}
        <div className="mt-6 w-full max-w-2xl bg-black/60 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl text-center">{questions[currentQuestion].question}</h2>
        </div>

        {/* Options */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionSelect(option)}
              className={`p-3 text-lg rounded-lg transition-all duration-200 border ${
                selectedOption
                  ? option === questions[currentQuestion].correctAnswer
                    ? "bg-green-500 text-black"
                    : "bg-red-500 text-black"
                  : "bg-white/20 hover:bg-white/30 text-white"
              }`}
              disabled={!!selectedOption}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Score Display */}
        <div className="mt-6 text-lg bg-black/60 p-3 rounded-lg shadow-lg">
          Score: {score}
        </div>
      </div>
    </div>
  );
}
