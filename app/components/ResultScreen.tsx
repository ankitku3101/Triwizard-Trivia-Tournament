"use client";
import Image from "next/image";
import Link from "next/link";

export default function ResultScreen() {
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
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-200 drop-shadow-lg mt-6">
          Match Results
        </h1>

        {/* Result Box */}
        <div className="backdrop-blur-md bg-white/10 text-white p-8 rounded-xl max-w-4xl w-full shadow-lg border border-white border-opacity-30 mt-12 flex flex-col items-center gap-6">
          {/* Players & Scores */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8">
            {/* Player 1 */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-32 h-32 rounded-full border border-white flex items-center justify-center text-center">
                Player 1
              </div>
              <p className="text-lg">Harry Potter</p>
            </div>

            {/* Score */}
            <div className="backdrop-blur-sm bg-white/10 border border-white border-opacity-30 rounded-md px-6 py-4 text-xl font-semibold text-yellow-200">
              120 - 80
            </div>

            {/* Player 2 */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-32 h-32 rounded-full border border-white flex items-center justify-center text-center">
                Player 2
              </div>
              <p className="text-lg">Draco Malfoy</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <Link href="/game">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-md font-semibold shadow-md transition duration-300">
                New Match
              </button>
            </Link>
            <Link href="/">
              <button className="bg-white hover:bg-gray-300 text-black px-6 py-2 rounded-md font-semibold shadow-md transition duration-300">
                Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
