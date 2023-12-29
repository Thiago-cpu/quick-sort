import seedrandom from "seedrandom";
import type { ConfigParams } from "./page";
import { cn } from "@/lib/utils";

type BoardProps = {
  heights: number[];
};

export default function Board({ heights }: BoardProps) {
  return (
    <div className="grow flex items-center self-stretch">
      <div
        className={cn("flex items-end justify-center grow gap-4 h-[500px]", {
          "gap-2": heights.length > 50,
          "gap-1": heights.length > 75,
        })}
      >
        {heights.map((height, i) => (
          <div
            key={i}
            id={`element-${i}`}
            className={`bg-primary element grow max-w-[50px]`}
            style={{ height }}
          ></div>
        ))}
      </div>
    </div>
  );
}
