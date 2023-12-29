"use client";

import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function PlayToolbar() {
  return (
    <div className="flex flex-row gap-4">
      <Button
        variant="outline"
        size="icon"
        className="w-[440px]"
        // onClick={}
      >
        <Play className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    </div>
  );
}
