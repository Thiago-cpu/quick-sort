"use client";
import { randomSeed } from "@/lib/utils";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function useConfig() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const seed = searchParams.get("seed");
  const elements = Number(searchParams.get("elements"));

  const randomizeSeed = () => {
    const params = new URLSearchParams(searchParams);
    params.set("seed", randomSeed());

    replace(`${pathname}?${params.toString()}`);
  };

  const setElements = (newElements: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("elements", newElements.toString());

    replace(`${pathname}?${params.toString()}`);
  };

  if (!seed) {
    throw new Error("seed is missing");
  }

  return {
    randomizeSeed,
    elements,
    seed,
    setElements,
  };
}
