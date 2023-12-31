import { redirect } from "next/navigation";
import TopToolbar from "./toolbar/top-toolbar";
import { randomSeed } from "@/lib/utils";
import Board from "./board";
import BottomToolbar from "./toolbar/bottom-toolbar";
import seedrandom from "seedrandom";

export type ConfigParams = {
  seed: string;
  elements: string;
};

const areValidSearchParams = (
  configParams?: Partial<ConfigParams>
): configParams is ConfigParams => {
  if (!configParams) return false;
  if (!configParams.seed || !configParams.elements) return false;
  const elements = Number(configParams.elements);
  if (isNaN(elements)) return false;
  if (elements > 100 || elements < 3) return false;

  return true;
};

export default function Home({
  searchParams,
}: {
  searchParams?: Partial<ConfigParams>;
}) {
  const validConfigParams = areValidSearchParams(searchParams);
  if (!validConfigParams) {
    const defaultQueryParams = `seed=${randomSeed()}&elements=10`;
    return redirect(`/?${defaultQueryParams}`);
  }
  const elements = Number(searchParams.elements);
  const rng = seedrandom(searchParams.seed);

  const heights = new Array(elements)
    .fill(0)
    .map(() => Math.floor(rng() * 500));

  return (
    <main className="flex min-h-screen flex-col items-center px-12 py-16 2xl:px-24 bg-background gap-4">
      <TopToolbar />
      <Board heights={heights} />
      <BottomToolbar heights={heights} />
    </main>
  );
}
