// Game.tsx

"use client";
import GameCanvas from "./GameCanvas";
import { useGameLogic } from "../useGameLogic";

const Game = () => {
  const {
    playerX,
    items,
    score,
    health,
    isRunning,
    isGameOver,
    startGame,
  } = useGameLogic();

  return (
    <div className="flex flex-col items-center">
      {!isRunning && !isGameOver && (
        <button
          onClick={startGame}
          className="px-4 py-2 bg-pink-500 text-white rounded mt-4"
        >
          ▶️ Старт
        </button>
      )}

      {isGameOver && (
        <div className="text-center text-white mt-4">
          <h2 className="text-2xl mb-2">💀 Game Over</h2>
          <p className="mb-2">Очки: {score}</p>
          <button
            onClick={startGame}
            className="px-4 py-2 bg-purple-600 text-white rounded"
          >
            🔁 Сыграть снова
          </button>
        </div>
      )}

      {isRunning && (
        <>
          <div className="text-white mb-2">
            ❤️ {health} | 🍬 {score}
          </div>

          <GameCanvas
            playerX={playerX}
            items={items}
            width={900}
            height={500}
          />
        </>
      )}
    </div>
  );
};

export default Game;
