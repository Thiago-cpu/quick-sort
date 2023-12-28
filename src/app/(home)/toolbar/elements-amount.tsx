"use client";

import { Slider } from "@/components/ui/slider";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ELEMENTS_DEFAULT = 10;

export default function ElementsAmount() {
  const searchParams = useSearchParams();
  const elementsParam = Number(
    searchParams.get("elements") ?? ELEMENTS_DEFAULT
  );
  const initialElements = isNaN(elementsParam)
    ? ELEMENTS_DEFAULT
    : elementsParam;

  const [elements, setElements] = useState([
    Math.max(Math.min(initialElements, 100), 3),
  ]);
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleValueCommit = (value: number[]) => {
    const [elemmentsCommited] = value;
    const params = new URLSearchParams(searchParams);
    params.set("elements", elemmentsCommited.toString());

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Slider
      className="w-96"
      min={3}
      max={100}
      value={elements}
      onValueChange={setElements}
      onValueCommit={handleValueCommit}
      step={1}
      label={`Elements: ${elements}`}
    />
  );
}
