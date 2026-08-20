import Game from "@/components/Game";
import Header from "@/components/Header";
import { dailyPuzzle } from "@/lib/game";

export const dynamic = "force-dynamic";

export default function Home() {
  const { puzzle, number } = dailyPuzzle(new Date());

  return (
    <main className="flex min-h-dvh flex-col">
      <Header puzzleNumber={number} />
      <div className="flex w-full flex-1 flex-col py-6">
        <Game puzzle={puzzle} puzzleNumber={number} />
      </div>
      <footer className="border-t border-line-soft px-4 py-5">
        <p className="mx-auto max-w-3xl text-center text-xs text-faint">
          A new term every day at midnight UTC.
        </p>
      </footer>
    </main>
  );
}
