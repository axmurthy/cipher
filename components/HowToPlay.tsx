"use client";

const EXAMPLES = [
  {
    letters: ["T", "E", "N", "S", "O", "R"],
    states: ["correct", "absent", "absent", "absent", "absent", "absent"],
    note: "T is in the answer, in that exact position.",
  },
  {
    letters: ["C", "A", "C", "H", "E"],
    states: ["absent", "present", "absent", "absent", "absent"],
    note: "A is in the answer, but somewhere else.",
  },
];

const STYLES: Record<string, string> = {
  correct: "bg-correct border-correct text-white",
  present: "bg-present border-present text-white",
  absent: "bg-absent border-absent text-muted",
};

export default function HowToPlay({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-4 backdrop-blur-sm sm:items-center">
      <div className="animate-fade-up w-full max-w-md overflow-hidden rounded-2xl border border-line bg-surface">
        <div className="flex items-center justify-between border-b border-line-soft px-6 py-5">
          <h2 className="text-lg font-semibold tracking-tight">How to play</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-md px-2 py-1 text-muted transition-colors hover:bg-raised hover:text-text"
          >
            ✕
          </button>
        </div>

        <div className="space-y-5 px-6 py-5 text-sm leading-relaxed text-muted">
          <p>
            Every day, one term from AI, tech, healthcare, startups, science or
            research. You get a clue and a handful of guesses.
          </p>
          <p>
            Type any word of the right length. Tile colours tell you how close
            you are.
          </p>

          <div className="space-y-4">
            {EXAMPLES.map((example, i) => (
              <div key={i} className="space-y-2">
                <div className="flex gap-1.5">
                  {example.letters.map((letter, j) => (
                    <div
                      key={j}
                      className={`flex h-9 w-9 items-center justify-center rounded border text-sm font-semibold ${
                        STYLES[example.states[j]]
                      }`}
                    >
                      {letter}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-faint">{example.note}</p>
              </div>
            ))}
          </div>

          <p className="border-t border-line-soft pt-5 text-text">
            Win or lose, you get the explanation and a link to read further.
            That is the actual point.
          </p>
        </div>
      </div>
    </div>
  );
}
