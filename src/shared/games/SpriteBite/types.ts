// types.ts

export type Item = {
    id: number;
    x: number;
    y: number;
    isGood: boolean;
  };
  
  export type GameState = {
    playerX: number;
    items: Item[];
    score: number;
    health: number;
    isRunning: boolean;
    isGameOver: boolean;
  };
  