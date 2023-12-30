"use client";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";
import useSortAnimation from "./useSortAnimation";

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
