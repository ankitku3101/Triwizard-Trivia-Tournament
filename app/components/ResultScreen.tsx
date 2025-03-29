"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function ResultScreen() {
  const searchParams = useSearchParams();
  const wizardName = searchParams.get("name");
  const score = searchParams.get("score");

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Image src="/hogwarts.jpg" alt="Hogwarts" fill className="object-cover opacity-50" />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 p-6">
        <h1 className="text-5xl md:text-6xl font-bold text-yellow-200 drop-shadow-lg">Match Result</h1>

        {/* Players */}
        <div className="flex gap-16 mt-8 items-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-40 h-40 rounded-full border-4 border-yellow-400 overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 relative">
              <Image src="/arthur.jpeg" alt="Player 1" fill className="object-cover" />
            </div>
            <p className="text-white text-xl">{wizardName || "Player"}</p>
          </div>

          <div className="text-4xl text-white font-bold">VS</div>

          <div className="flex flex-col items-center gap-4">
            <div className="w-40 h-40 rounded-full border-4 border-yellow-400 overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 relative">
              <Image src="/voldemort.jpeg" alt="Player 2" fill className="object-cover" />
            </div>
            <p className="text-white text-xl">Voldemort</p>
          </div>
        </div>

        {/* Result */}
        <div className="backdrop-blur-md bg-white/10 text-white p-6 rounded-xl max-w-lg w-full shadow-lg border border-white border-opacity-30 mt-8">
          <h2 className="text-2xl mb-4 text-center">Your Score: {score}</h2>
          <p className="text-center text-sm md:text-base">
            You outwitted your opponent with magical knowledge!
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-6 mt-6 flex-wrap justify-center">
          <Link href="/">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-md font-semibold shadow-md transition-colors">
              Home
            </button>
          </Link>
          <Link href="/">
            <button className="bg-white/10 text-white px-6 py-2 rounded-md font-semibold shadow-md border border-yellow-400 hover:bg-white/20 transition-colors">
              New Match
            </button>
          </Link>
          <Link href="/leaderboard">
            <button className="bg-white/10 text-white px-6 py-2 rounded-md font-semibold shadow-md border border-yellow-400 hover:bg-white/20 transition-colors">
              Leaderboard
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
    