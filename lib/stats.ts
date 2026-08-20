export type Stats = {
  played: number;
  wins: number;
  streak: number;
  bestStreak: number;
  lastNumber: number | null;
};

export type SavedGame = {
  number: number;
  guesses: string[];
  finished: boolean;
  won: boolean;
};

const STATS_KEY = "cipher.stats.v1";
const GAME_KEY = "cipher.game.v1";

const EMPTY: Stats = {
  played: 0,
  wins: 0,
  streak: 0,
  bestStreak: 0,
  lastNumber: null,
};

function read<T>(key: string): T | null {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

function write(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // storage unavailable (private mode, quota) — play continues without persistence
  }
}

export function loadStats(): Stats {
  return read<Stats>(STATS_KEY) ?? EMPTY;
}

export function recordResult(number: number, won: boolean): Stats {
  const stats = loadStats();
  if (stats.lastNumber === number) return stats;

  const continues = stats.lastNumber === number - 1;
  const streak = won ? (continues ? stats.streak : 0) + 1 : 0;

  const next: Stats = {
    played: stats.played + 1,
    wins: stats.wins + (won ? 1 : 0),
    streak,
    bestStreak: Math.max(stats.bestStreak, streak),
    lastNumber: number,
  };
  write(STATS_KEY, next);
  return next;
}

export function loadGame(number: number): SavedGame | null {
  const saved = read<SavedGame>(GAME_KEY);
  return saved && saved.number === number ? saved : null;
}

export function saveGame(game: SavedGame) {
  write(GAME_KEY, game);
}
