"use client";

import { evaluateGuess, type LetterState } from "@/lib/game";

const TILE_STYLES: Record<LetterState, string> = {
  correct: "bg-correct border-correct text-white",
  present: "bg-present border-present text-white",
  absent: "bg-absent border-absent text-muted",
};

function Tile({
  letter,
  state,
  index,
  revealed,
}: {
  letter: string;
  state?: LetterState;
  index: number;
  revealed: boolean;
}) {
  const base =
    "flex items-center justify-center rounded-md border font-semibold uppercase select-none aspect-square w-full text-[clamp(0.9rem,4.2vw,1.6rem)]";

  if (revealed && state) {
    return (
      <div
        className={`${base} ${TILE_STYLES[state]} animate-flip`}
        style={{ animationDelay: `${index * 90}ms` }}
      >
        {letter}
      </div>
    );
  }

  return (
    <div
      className={`${base} border-line bg-surface text-text ${
        letter ? "animate-pop border-faint" : ""
      }`}
    >
      {letter}
    </div>
  );
}

export default function Board({
  answer,
  guesses,
  current,
  rows,
  invalid,
}: {
  answer: string;
  guesses: string[];
  current: string;
  rows: number;
  invalid: boolean;
}) {
  const length = answer.length;

  return (
    <div
      className="mx-auto grid w-full gap-1.5"
      style={{ maxWidth: `${Math.min(length * 3.6, 22)}rem` }}
    >
      {Array.from({ length: rows }).map((_, rowIndex) => {
        const submitted = guesses[rowIndex];
        const isCurrentRow = rowIndex === guesses.length;
        const evaluation = submitted
          ? evaluateGuess(submitted, answer)
          : undefined;

        return (
          <div
            key={rowIndex}
            className={`grid gap-1.5 ${
              isCurrentRow && invalid ? "animate-shake" : ""
            }`}
            style={{ gridTemplateColumns: `repeat(${length}, minmax(0, 1fr))` }}
          >
            {Array.from({ length }).map((_, col) => (
              <Tile
                key={col}
                index={col}
                letter={submitted?.[col] ?? (isCurrentRow ? current[col] ?? "" : "")}
                state={evaluation?.[col]}
                revealed={Boolean(submitted)}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}
