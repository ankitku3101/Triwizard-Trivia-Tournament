"use client";
import Image from "next/image";

export default function LandingScreen() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hogwarts.jpg"
        alt="Hogwarts"
        fill
        className="object-cover opacity-50"
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-start p-8">
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-yellow-200 drop-shadow-lg mt-6 mb-8">
          Welcome to Triwizard Trivia
        </h1>

        {/* Boxes */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center mb-10">
          {/* Rules Box */}
          <div className="backdrop-blur-md bg-white/10 text-white p-6 rounded-xl w-72 md:w-96 shadow-lg border border-white/30">
            <h2 className="text-2xl mb-4 text-center">Game Rules</h2>
            <ul className="list-disc pl-5 text-sm md:text-base space-y-2">
              <li>Answer correctly to perform Quidditch moves</li>
              <li>Wrong answers trigger penalties</li>
              <li>Fastest correct answer scores more</li>
            </ul>
          </div>

          {/* Player Queue */}
          <div className="backdrop-blur-md bg-white/10 text-white p-6 rounded-xl w-72 md:w-96 shadow-lg border border-white/30 h-60 overflow-y-auto">
            <h2 className="text-2xl mb-4 text-center">Player Queue</h2>
            <ul className="space-y-2 text-sm md:text-base">
              <li>🧙‍♂️ HarryPotter</li>
              <li>🧙‍♀️ Hermione</li>
              <li>🧙‍♂️ Ron</li>
              <li>🧙‍♂️ Draco</li>
              <li>🧙‍♀️ Luna</li>
              <li>🧙‍♂️ Cedric</li>
              <li>🧙‍♂️ Neville</li>
            </ul>
          </div>
        </div>

        {/* Input & Button */}
        <div className="flex flex-col gap-4 w-full max-w-md items-center">
          <input
            type="text"
            placeholder="Enter your Wizard Name"
            className="px-4 py-3 w-full rounded-md bg-white/10 text-white border border-yellow-400 focus:outline-none backdrop-blur-md placeholder-white placeholder-opacity-80"
          />
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-md font-semibold shadow-md w-40">
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
}
