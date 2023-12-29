"use client";
import anime from "animejs/lib/anime.es.js";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";
import type { AnimeInstance, AnimeTimelineInstance } from "animejs";
import { useEffect, useRef, useState, useTransition } from "react";

function useSortAnimation({ heights }: { heights: number[] }) {
  const [playing, setPlaying] = useState(false);
  const animations = useRef<AnimeInstance[]>([]);

  const loadAnimation = async () => {
    const positions = heights.map((_h, i) => i);

    for (let i = 0; i < heights.length; i++) {
      for (let j = i + 1; j < heights.length; j++) {
        const from = positions[i];
        const to = positions[j];
        if (heights[from] < heights[to]) continue;
        positions[i] = to;
        positions[j] = from;
        const fromX = document
          .getElementById(`element-${from}`)
          ?.getBoundingClientRect().x;
        const toX = document
          .getElementById(`element-${to}`)
          ?.getBoundingClientRect().x;
        if (toX === undefined || fromX === undefined) {
          console.error("toX or fromX is undefined");
          continue;
        }
        const distance = Math.abs(toX - fromX);
        const moveLeft = anime({
          targets: `#element-${from}`,
          translateX: {
            value: `+=${distance}px`,
            duration: 250,
          },

          easing: "easeInOutSine",
        });
        const moveRight = anime({
          targets: `#element-${to}`,
          translateX: {
            value: `-=${distance}px`,
            duration: 250,
          },

          easing: "easeInOutSine",
        });
        animations.current = [moveLeft, moveRight];
        await Promise.all([moveLeft.finished, moveRight.finished]);
      }
    }
  };

  const reset = () => {
    animations.current.forEach((a) => a.restart());
    animations.current.forEach((a) => a.pause());
    animations.current = [];
    anime({
      targets: `.element`,
      translateX: {
        value: "0px",
        duration: 100,
      },

      easing: "easeInOutSine",
    });
    setPlaying(false);
  };

  const togglePlay = () => {
    if (animations.current.length === 0) loadAnimation();
    animations.current.forEach((a) => a[playing ? "pause" : "play"]());
    setPlaying(!playing);
  };

  useEffect(() => reset, [heights]);

  return { togglePlay, playing };
}

export default function PlayToolbar({ heights }: { heights: number[] }) {
  const { togglePlay, playing } = useSortAnimation({ heights });
  const Icon = playing ? Pause : Play;
  return (
    <div className="flex flex-row gap-4">
      <Button
        variant="outline"
        size="icon"
        className="w-[440px]"
        onClick={togglePlay}
      >
        <Icon className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    </div>
  );
}
