"use client";

import type { LetterState } from "@/lib/game";

const ROWS = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

const KEY_STYLES: Record<LetterState, string> = {
  correct: "bg-correct border-correct text-white",
  present: "bg-present border-present text-white",
  absent: "bg-absent border-line text-faint",
};

export default function Keyboard({
  states,
  onKey,
  disabled,
}: {
  states: Record<string, LetterState>;
  onKey: (key: string) => void;
  disabled: boolean;
}) {
  const base =
    "flex h-12 items-center justify-center rounded-md border text-sm font-medium uppercase transition-colors duration-150 active:scale-95 disabled:opacity-40 sm:h-13";
  const idle = "border-line bg-raised text-text hover:border-faint";

  return (
    <div className="mx-auto flex w-full max-w-lg flex-col gap-1.5">
      {ROWS.map((row, i) => (
        <div key={row} className="flex justify-center gap-1.5">
          {i === 2 && (
            <button
              type="button"
              onClick={() => onKey("ENTER")}
              disabled={disabled}
              className={`${base} ${idle} flex-[1.6] px-2 text-[0.7rem] tracking-wide`}
            >
              Enter
            </button>
          )}
          {row.split("").map((letter) => (
            <button
              key={letter}
              type="button"
              onClick={() => onKey(letter)}
              disabled={disabled}
              className={`${base} flex-1 ${
                states[letter] ? KEY_STYLES[states[letter]] : idle
              }`}
            >
              {letter}
            </button>
          ))}
          {i === 2 && (
            <button
              type="button"
              onClick={() => onKey("BACKSPACE")}
              disabled={disabled}
              className={`${base} ${idle} flex-[1.6] px-2 text-[0.7rem] tracking-wide`}
            >
              Delete
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
