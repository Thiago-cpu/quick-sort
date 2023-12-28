import { redirect } from "next/navigation";
import Toolbar from "./toolbar/toolbar";
import { randomSeed } from "@/lib/utils";

type SearchParams = {
  seed?: string;
  elements?: number;
};

const areValidSearchParams = (searchParams?: SearchParams) => {
  if (!searchParams) return false;
  if (!searchParams.seed || !searchParams.elements) return false;
  const elements = Number(searchParams.elements);
  if (isNaN(elements)) return false;
  if (elements > 100 || elements < 3) return false;

  return true;
};

export default function Home({
  searchParams,
}: {
  searchParams?: SearchParams;
}) {
  const validSearchParams = areValidSearchParams(searchParams);
  if (!validSearchParams) {
    const defaultQueryParams = `seed=${randomSeed()}&elements=10`;
    return redirect(`/?${defaultQueryParams}`);
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-background">
      <Toolbar />
      <div></div>
    </main>
  );
}
