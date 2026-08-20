import { PUZZLES, type Puzzle } from "./puzzles";

export type LetterState = "correct" | "present" | "absent";

export function maxAttempts(answer: string): number {
  return answer.length >= 8 ? 7 : 6;
}

export function evaluateGuess(guess: string, answer: string): LetterState[] {
  const result: LetterState[] = Array(answer.length).fill("absent");
  const counts = new Map<string, number>();

  for (let i = 0; i < answer.length; i++) {
    if (guess[i] === answer[i]) {
      result[i] = "correct";
    } else {
      counts.set(answer[i], (counts.get(answer[i]) ?? 0) + 1);
    }
  }

  for (let i = 0; i < answer.length; i++) {
    if (result[i] === "correct") continue;
    const remaining = counts.get(guess[i]) ?? 0;
    if (remaining > 0) {
      result[i] = "present";
      counts.set(guess[i], remaining - 1);
    }
  }

  return result;
}

const RANK: Record<LetterState, number> = { absent: 0, present: 1, correct: 2 };

export function keyboardStates(
  guesses: string[],
  answer: string,
): Record<string, LetterState> {
  const states: Record<string, LetterState> = {};
  for (const guess of guesses) {
    const evaluation = evaluateGuess(guess, answer);
    guess.split("").forEach((letter, i) => {
      const next = evaluation[i];
      const current = states[letter];
      if (!current || RANK[next] > RANK[current]) states[letter] = next;
    });
  }
  return states;
}

const EPOCH = Date.UTC(2026, 0, 1);
const DAY_MS = 86_400_000;

export function puzzleNumberFor(date: Date): number {
  const today = Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
  );
  return Math.floor((today - EPOCH) / DAY_MS);
}

export function dailyPuzzle(date: Date): { puzzle: Puzzle; number: number } {
  const number = puzzleNumberFor(date);
  const index = ((number % PUZZLES.length) + PUZZLES.length) % PUZZLES.length;
  return { puzzle: PUZZLES[index], number };
}

export function shareText(
  puzzleNumber: number,
  guesses: string[],
  answer: string,
  won: boolean,
): string {
  const limit = maxAttempts(answer);
  const score = won ? `${guesses.length}/${limit}` : `X/${limit}`;
  const grid = guesses
    .map((guess) =>
      evaluateGuess(guess, answer)
        .map((s) => (s === "correct" ? "🟩" : s === "present" ? "🟨" : "⬛"))
        .join(""),
    )
    .join("\n");
  return `Cipher #${puzzleNumber} — ${score}\n\n${grid}`;
}
