import { Slider } from "@/components/ui/slider";
import SeedRandomizer from "./seed-randomizer";
import ElementsAmount from "./elements-amount";

export default function TopToolbar() {
  return (
    <div className="flex flex-row gap-4 w-full max-w-[440px] justify-center">
      <ElementsAmount />
    </div>
  );
}
