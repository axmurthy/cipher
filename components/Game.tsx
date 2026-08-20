"use client";

import { useCallback, useEffect, useState } from "react";
import type { Puzzle } from "@/lib/puzzles";
import { keyboardStates, maxAttempts } from "@/lib/game";
import {
  loadGame,
  loadStats,
  recordResult,
  saveGame,
  type Stats,
} from "@/lib/stats";
import Board from "./Board";
import Keyboard from "./Keyboard";
import ResultModal from "./ResultModal";

type Session = {
  guesses: string[];
  finished: boolean;
  won: boolean;
  stats: Stats;
  showResult: boolean;
};

const NEW_SESSION: Session = {
  guesses: [],
  finished: false,
  won: false,
  stats: { played: 0, wins: 0, streak: 0, bestStreak: 0, lastNumber: null },
  showResult: false,
};

export default function Game({
  puzzle,
  puzzleNumber,
}: {
  puzzle: Puzzle;
  puzzleNumber: number;
}) {
  const answer = puzzle.answer;
  const rows = maxAttempts(answer);

  const [session, setSession] = useState<Session>(NEW_SESSION);
  const [current, setCurrent] = useState("");
  const [toast, setToast] = useState<string | null>(null);
  const [invalid, setInvalid] = useState(false);

  // Saved progress lives in localStorage, so it can only be read after mount —
  // reading it during render would diverge from the server-rendered HTML.
  useEffect(() => {
    const saved = loadGame(puzzleNumber);
    const stats = loadStats();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSession(
      saved
        ? {
            guesses: saved.guesses,
            finished: saved.finished,
            won: saved.won,
            stats,
            showResult: saved.finished,
          }
        : { ...NEW_SESSION, stats },
    );
  }, [puzzleNumber]);

  const flash = useCallback((message: string) => {
    setToast(message);
    setInvalid(true);
    setTimeout(() => setInvalid(false), 450);
    setTimeout(() => setToast(null), 1600);
  }, []);

  const submit = useCallback(() => {
    if (current.length !== answer.length) {
      flash(`Needs ${answer.length} letters`);
      return;
    }

    const guesses = [...session.guesses, current];
    const won = current === answer;
    const finished = won || guesses.length >= rows;

    setCurrent("");
    saveGame({ number: puzzleNumber, guesses, finished, won });

    if (!finished) {
      setSession((s) => ({ ...s, guesses }));
      return;
    }

    const stats = recordResult(puzzleNumber, won);
    setSession((s) => ({ ...s, guesses, finished, won, stats }));
    setTimeout(
      () => setSession((s) => ({ ...s, showResult: true })),
      answer.length * 90 + 500,
    );
  }, [current, answer, session.guesses, rows, puzzleNumber, flash]);

  const handleKey = useCallback(
    (key: string) => {
      if (session.finished) return;
      if (key === "ENTER") return submit();
      if (key === "BACKSPACE") return setCurrent((c) => c.slice(0, -1));
      if (/^[A-Z]$/.test(key)) {
        setCurrent((c) => (c.length < answer.length ? c + key : c));
      }
    },
    [session.finished, submit, answer.length],
  );

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      handleKey(event.key.toUpperCase());
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [handleKey]);

  const setShowResult = (showResult: boolean) =>
    setSession((s) => ({ ...s, showResult }));

  return (
    <div className="flex w-full flex-1 flex-col gap-6">
      <div className="mx-auto w-full max-w-xl px-4">
        <div className="rounded-xl border border-line bg-surface p-5">
          <div className="flex items-center justify-between gap-3">
            <span className="rounded-full border border-line bg-raised px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-wider text-muted">
              {puzzle.topic}
            </span>
            <span className="text-[0.65rem] uppercase tracking-wider text-faint">
              {answer.length} letters · {rows} tries
            </span>
          </div>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-text">
            {puzzle.clue}
          </p>
        </div>
      </div>

      <div className="relative px-4">
        {toast && (
          <div className="animate-fade-up absolute left-1/2 top-0 z-20 -translate-x-1/2 rounded-md bg-accent px-3 py-1.5 text-xs font-medium text-ink">
            {toast}
          </div>
        )}
        <Board
          answer={answer}
          guesses={session.guesses}
          current={current}
          rows={rows}
          invalid={invalid}
        />
      </div>

      <div className="mt-auto px-2 pb-4">
        <Keyboard
          states={keyboardStates(session.guesses, answer)}
          onKey={handleKey}
          disabled={session.finished}
        />
        {session.finished && !session.showResult && (
          <button
            type="button"
            onClick={() => setShowResult(true)}
            className="mx-auto mt-4 block text-sm text-muted underline decoration-line underline-offset-4 hover:text-text"
          >
            See what this means
          </button>
        )}
      </div>

      {session.showResult && (
        <ResultModal
          puzzle={puzzle}
          puzzleNumber={puzzleNumber}
          guesses={session.guesses}
          won={session.won}
          stats={session.stats}
          onClose={() => setShowResult(false)}
        />
      )}
    </div>
  );
}
