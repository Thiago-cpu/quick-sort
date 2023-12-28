"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { randomSeed } from "../../core/seed";
import { Button } from "@/components/ui/button";
import { Dices } from "lucide-react";

export default function SeedRandomizer() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleNewSeed = () => {
    const params = new URLSearchParams(searchParams);
    params.set("seed", randomSeed());

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className="shrink-0"
      onClick={handleNewSeed}
    >
      <Dices className="h-[1.2rem] w-[1.2rem]" />
    </Button>
  );
}
