import { redirect } from "next/navigation";
import ConfigToolbar from "./config-toolbar/config-toolbar";
import { randomSeed } from "@/lib/utils";
import Board from "./board";
import PlayToolbar from "./play-toolbar";

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

  return (
    <main className="flex min-h-screen flex-col items-center p-12 md:p-24 bg-background">
      <ConfigToolbar />
      <Board
        elements={Number(searchParams.elements)}
        seed={searchParams.seed}
      />
      <PlayToolbar />
    </main>
  );
}
