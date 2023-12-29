"use client";

import { Slider } from "@/components/ui/slider";
import useConfig from "../useConfig";
import { useState } from "react";

export default function ElementsAmount() {
  const { elements, setElements } = useConfig();
  const [elementState, setElementState] = useState([elements]);

  const handleValueCommit = (value: number[]) => {
    const [elemmentsCommited] = value;
    setElements(elemmentsCommited);
  };

  return (
    <Slider
      className="w-96"
      min={3}
      max={100}
      value={elementState}
      onValueChange={setElementState}
      onValueCommit={handleValueCommit}
      step={1}
      label={`Elements: ${elementState}`}
    />
  );
}
