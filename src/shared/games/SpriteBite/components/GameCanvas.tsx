// GameCanvas.tsx

import { Stage, Layer, Rect, Circle } from "react-konva";
import { Item } from "../types";

type Props = {
  playerX: number;
  items: Item[];
  width: number;
  height: number;
};

const PLAYER_HEIGHT = 20;
const PLAYER_WIDTH = 80;

const GameCanvas = ({ playerX, items, width, height }: Props) => {
  return (
    <Stage width={width} height={height} className="bg-[var(--color-accent)]">
      <Layer>
        <Rect
          x={playerX}
          y={height - PLAYER_HEIGHT - 10}
          width={PLAYER_WIDTH}
          height={PLAYER_HEIGHT}
          fill="green"
        />

        {items.map((item) => (
          <Circle
            key={item.id}
            x={item.x}
            y={item.y}
            radius={12}
            fill={item.isGood ? "deepskyblue" : "crimson"}
          />
        ))}
      </Layer>
    </Stage>
  );
};

export default GameCanvas;
