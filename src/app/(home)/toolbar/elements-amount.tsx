"use client";

import { Slider } from "@/components/ui/slider";
import useConfig from "../useConfig";
import { useState } from "react";
import { Label } from "@/components/ui/label";

export default function ElementsAmount() {
  const { elements, setElements } = useConfig();
  const [elementState, setElementState] = useState([elements]);

  const handleValueCommit = (value: number[]) => {
    const [elemmentsCommited] = value;
    setElements(elemmentsCommited);
  };

  return (
    <div className=" flex flex-col gap-3 grow min-w-48">
      <Label className="self-center">{`Elements: ${elementState}`}</Label>
      <Slider
        min={3}
        max={100}
        value={elementState}
        onValueChange={setElementState}
        onValueCommit={handleValueCommit}
        step={1}
      />
    </div>
  );
}
