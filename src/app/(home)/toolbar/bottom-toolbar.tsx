"use client";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";
import useSortAnimation from "../useSortAnimation";
import SeedRandomizer from "./seed-randomizer";
import PlaybackSpeed from "./playback-speed";
import { useState } from "react";

export default function BottomToolbar({ heights }: { heights: number[] }) {
  const { togglePlay, playing, durationRef } = useSortAnimation({ heights });
  const [duration, setDuration] = useState(125);
  durationRef.current = duration;

  const playbackSpeedValue = (125 / duration).toString();
  const onPlaybackSpeedValueChange = (v: string) => {
    const n = Number(v);
    if (isNaN(n)) return;
    setDuration(125 / n);
  };

  const Icon = playing ? Pause : Play;

  return (
    <div className="flex flex-col sm:flex-row w-full justify-center max-w-[440px] sm:max-w-none items-center gap-4">
      <SeedRandomizer />
      <Button
        variant="outline"
        className="w-full max-w-[440px]"
        size="icon"
        onClick={togglePlay}
      >
        <Icon className="h-[1.2rem] w-[1.2rem]" />
      </Button>
      <PlaybackSpeed
        value={playbackSpeedValue}
        onValueChange={onPlaybackSpeedValueChange}
      />
    </div>
  );
}
