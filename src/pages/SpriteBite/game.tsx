"use client"

import dynamic from "next/dynamic";

const Game = dynamic(() => import("@/shared/games/SpriteBite/components/Game"), { ssr: false });

export default function GamePage() {
  return (
    <div className="min-h-[calc(100vh-75.2px)] bg-[#4a4652] flex items-center justify-center">
      <Game />
    </div>
  );
}
