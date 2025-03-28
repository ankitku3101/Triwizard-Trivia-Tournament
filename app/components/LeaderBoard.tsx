"use client";
import Image from "next/image";

export default function LeaderBoard() {
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
      <div className="absolute inset-0 flex flex-col items-center justify-start gap-8 p-8">
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-yellow-200 drop-shadow-lg mt-8">
          Leaderboard
        </h1>

        {/* Leaderboard Box */}
        <div className="backdrop-blur-md bg-white/10 text-white p-8 rounded-xl max-w-lg w-full shadow-lg border border-white border-opacity-30 mt-6">
          <ul className="space-y-4 text-lg">
            <li className="flex justify-between">
              <span>🧙‍♂️ Harry Potter</span>
              <span>120 pts</span>
            </li>
            <li className="flex justify-between">
              <span>🧙‍♀️ Hermione Granger</span>
              <span>110 pts</span>
            </li>
            <li className="flex justify-between">
              <span>🧙‍♂️ Ron Weasley</span>
              <span>95 pts</span>
            </li>
            <li className="flex justify-between">
              <span>🧙‍♂️ Draco Malfoy</span>
              <span>80 pts</span>
            </li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex gap-6 mt-8">
          <button
            onClick={() => (window.location.href = "/")}
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-md font-semibold shadow-md transition duration-300"
          >
            Home
          </button>
          <button
            onClick={() => (window.location.href = "/match")}
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-md font-semibold shadow-md transition duration-300"
          >
            New Match
          </button>
        </div>
      </div>
    </div>
  );
}
