import seedrandom from "seedrandom";
import type { ConfigParams } from "./page";
import { cn } from "@/lib/utils";

type BoardProps = Omit<ConfigParams, "elements"> & {
  elements: number;
};

export default function Board({ elements, seed }: BoardProps) {
  const rng = seedrandom(seed);

  const heights = new Array(elements)
    .fill(0)
    .map(() => Math.floor(rng() * 500));

  return (
    <div className="grow flex items-center self-stretch">
      <div
        className={cn("flex items-end justify-center grow gap-4 h-[500px]", {
          "gap-2": elements > 50,
          "gap-1": elements > 75,
        })}
      >
        {heights.map((height, i) => (
          <div
            key={i}
            id={`element-${i}`}
            className="bg-primary grow max-w-[50px]"
            style={{ height }}
          ></div>
        ))}
      </div>
    </div>
  );
}
