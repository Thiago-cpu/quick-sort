import { redirect } from "next/navigation";
import { randomSeed } from "../core/seed";
import Toolbar from "./toolbar/toolbar";

export default function Home({
  searchParams,
}: {
  searchParams?: {
    seed?: string;
  };
}) {
  if (!searchParams?.seed) {
    const defaultQueryParams = `seed=${randomSeed()}`;
    return redirect(`/?${defaultQueryParams}`);
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-background">
      <Toolbar />
      <div></div>
    </main>
  );
}
