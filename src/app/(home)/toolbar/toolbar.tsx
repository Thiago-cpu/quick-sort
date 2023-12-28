import { Slider } from "@/components/ui/slider";
import SeedRandomizer from "./seed-randomizer";
import ElementsAmount from "./elements-amount";

export default function Toolbar() {
  return (
    <div className="flex flex-row gap-4">
      <ElementsAmount />
      <SeedRandomizer />
    </div>
  );
}
