"use client";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";
import useSortAnimation from "../useSortAnimation";
import SeedRandomizer from "./seed-randomizer";

export default function BottomToolbar({ heights }: { heights: number[] }) {
  const { togglePlay, playing } = useSortAnimation({ heights });
  const Icon = playing ? Pause : Play;
  return (
    <div className="flex flex-col md:flex-row w-full max-w-[440px] gap-4">
      <SeedRandomizer />
      <Button
        variant="outline"
        className="w-full"
        size="icon"
        onClick={togglePlay}
      >
        <Icon className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    </div>
  );
}
