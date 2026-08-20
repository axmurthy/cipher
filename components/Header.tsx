"use client";

import { useState } from "react";
import HowToPlay from "./HowToPlay";

export default function Header({ puzzleNumber }: { puzzleNumber: number }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-line-soft bg-ink/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 w-full max-w-3xl items-center justify-between px-4">
          <div className="flex items-baseline gap-2.5">
            <span className="text-[0.95rem] font-semibold tracking-tight">
              Cipher
            </span>
            <span className="text-xs tabular-nums text-faint">
              #{puzzleNumber}
            </span>
          </div>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="rounded-md border border-line px-2.5 py-1.5 text-xs text-muted transition-colors hover:border-faint hover:text-text"
          >
            How to play
          </button>
        </div>
      </header>
      {open && <HowToPlay onClose={() => setOpen(false)} />}
    </>
  );
}
