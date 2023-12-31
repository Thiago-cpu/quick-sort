import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Bold, Italic, Underline } from "lucide-react";

type PlaybackSpeedProps = {
  value: string;
  onValueChange: (value: string) => void;
};

export default function PlaybackSpeed(props: PlaybackSpeedProps) {
  return (
    <ToggleGroup type="single" {...props}>
      <ToggleGroupItem value="0.25" aria-label="Toggle bold">
        0.25x
      </ToggleGroupItem>
      <ToggleGroupItem value="0.5" aria-label="Toggle italic">
        0.5x
      </ToggleGroupItem>
      <ToggleGroupItem value="1" aria-label="Toggle strikethrough">
        1x
      </ToggleGroupItem>
      <ToggleGroupItem value="1.5" aria-label="Toggle strikethrough">
        1.5x
      </ToggleGroupItem>
      <ToggleGroupItem value="2" aria-label="Toggle strikethrough">
        2x
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
