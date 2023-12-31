"use client";
import { Button } from "@/components/ui/button";
import { Dices } from "lucide-react";
import useConfig from "../useConfig";

export default function SeedRandomizer() {
  const { randomizeSeed } = useConfig();

  return (
    <Button
      variant="outline"
      size="icon"
      className="w-full md:w-10 shrink-0"
      onClick={randomizeSeed}
    >
      <Dices className="h-[1.2rem] w-[1.2rem]" />
    </Button>
  );
}
