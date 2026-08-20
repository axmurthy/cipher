"use client";

import { useState } from "react";
import type { Puzzle } from "@/lib/puzzles";
import type { Stats } from "@/lib/stats";
import { shareText } from "@/lib/game";

function Stat({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-xl font-semibold tabular-nums">{value}</span>
      <span className="text-[0.65rem] uppercase tracking-wider text-faint">
        {label}
      </span>
    </div>
  );
}

export default function ResultModal({
  puzzle,
  puzzleNumber,
  guesses,
  won,
  stats,
  onClose,
}: {
  puzzle: Puzzle;
  puzzleNumber: number;
  guesses: string[];
  won: boolean;
  stats: Stats;
  onClose: () => void;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    const text = shareText(puzzleNumber, guesses, puzzle.answer, won);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  const rate = stats.played
    ? Math.round((stats.wins / stats.played) * 100)
    : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-4 backdrop-blur-sm sm:items-center">
      <div className="animate-fade-up w-full max-w-md overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl">
        <div className="flex items-start justify-between border-b border-line-soft px-6 py-5">
          <div>
            <p className="text-[0.65rem] uppercase tracking-wider text-faint">
              {won ? "Solved" : "Answer"}
            </p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight">
              {puzzle.answer}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-md px-2 py-1 text-muted transition-colors hover:bg-raised hover:text-text"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4 px-6 py-5">
          <p className="text-sm leading-relaxed text-muted">
            {puzzle.explanation}
          </p>
          <a
            href={puzzle.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-text underline decoration-line underline-offset-4 transition-colors hover:decoration-faint"
          >
            {puzzle.sourceLabel}
            <span aria-hidden className="text-faint">↗</span>
          </a>
        </div>

        <div className="grid grid-cols-4 gap-2 border-t border-line-soft px-6 py-5">
          <Stat label="Played" value={stats.played} />
          <Stat label="Win %" value={rate} />
          <Stat label="Streak" value={stats.streak} />
          <Stat label="Best" value={stats.bestStreak} />
        </div>

        <div className="border-t border-line-soft px-6 py-5">
          <button
            type="button"
            onClick={copy}
            className="w-full rounded-lg bg-accent px-4 py-3 text-sm font-medium text-ink transition-opacity hover:opacity-90"
          >
            {copied ? "Copied to clipboard" : "Share result"}
          </button>
          <p className="mt-3 text-center text-xs text-faint">
            Next cipher at midnight UTC
          </p>
        </div>
      </div>
    </div>
  );
}
