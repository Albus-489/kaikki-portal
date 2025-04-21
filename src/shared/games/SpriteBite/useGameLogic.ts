// useGameLogic.ts

import { useEffect, useRef, useState } from "react";
import { Item } from "./types";

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
const PLAYER_WIDTH = 80;

export const useGameLogic = () => {
  const [playerX, setPlayerX] = useState(GAME_WIDTH / 2 - PLAYER_WIDTH / 2);
  const [items, setItems] = useState<Item[]>([]);
  const [score, setScore] = useState(0);
  const [health, setHealth] = useState(3);
  const [isRunning, setIsRunning] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  const keys = useRef({ left: false, right: false });
  const itemIdRef = useRef(0);
  const requestRef = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const getFallSpeed = (score: number) => {
    const base = 4;
    return base + Math.floor(score / 15);
  };

  const startGame = () => {
    setScore(0);
    setHealth(3);
    setItems([]);
    setPlayerX(GAME_WIDTH / 2 - PLAYER_WIDTH / 2);
    setIsRunning(true);
    setIsGameOver(false);
  };

  const endGame = () => {
    setIsRunning(false);
    setIsGameOver(true);
    if (intervalRef.current) clearInterval(intervalRef.current);
    cancelAnimationFrame(requestRef.current);
  };

  // Обновление игры
  useEffect(() => {
    if (!isRunning) return;

    const update = () => {
      const fallSpeed = getFallSpeed(score);

      setItems((prev) =>
        prev
          .map((item) => ({
            ...item,
            y: item.y + fallSpeed,
          }))
          .filter((item) => {
            const caught =
              item.y > GAME_HEIGHT - 40 &&
              item.x > playerX &&
              item.x < playerX + PLAYER_WIDTH;

            if (caught) {
              if (item.isGood) setScore((s) => s + 1);
              else setHealth((h) => h - 1);
              return false;
            }

            return item.y < GAME_HEIGHT;
          })
      );

      setPlayerX((x) => {
        let newX = x;
        if (keys.current.left) newX -= 6;
        if (keys.current.right) newX += 6;
        return Math.max(0, Math.min(GAME_WIDTH - PLAYER_WIDTH, newX));
      });

      requestRef.current = requestAnimationFrame(update);
    };

    requestRef.current = requestAnimationFrame(update);

    intervalRef.current = setInterval(() => {
      setItems((prev) => [
        ...prev,
        {
          id: itemIdRef.current++,
          x: Math.random() * (GAME_WIDTH - 20) + 10,
          y: -20,
          isGood: Math.random() > 0.5,
        },
      ]);
    }, 1000);

    return () => {
      cancelAnimationFrame(requestRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, playerX, score]);

  // Клавиши
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") keys.current.left = true;
      if (e.key === "ArrowRight") keys.current.right = true;
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") keys.current.left = false;
      if (e.key === "ArrowRight") keys.current.right = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  // Game over
  useEffect(() => {
    if (health <= 0) {
      endGame();
    }
  }, [health]);

  return {
    playerX,
    items,
    score,
    health,
    isRunning,
    isGameOver,
    startGame,
  };
};
