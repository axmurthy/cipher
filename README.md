# Cipher

A daily puzzle for curious people. One term a day from AI, tech, healthcare,
startups, science and research — guess it from a clue, then find out why it
matters.

The guessing is the hook. The point is the explanation and the source link you
get at the end, win or lose.

## How it works

- One puzzle per day, the same for everyone, rotating at midnight UTC
- A clue, the answer length, and six or seven tries
- Green means right letter and right place, amber means right letter elsewhere
- Progress and stats persist locally in the browser

## Running it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Adding puzzles

Every puzzle lives in `lib/puzzles.ts` as a single typed entry:

```ts
{
  id: 61,
  answer: "TRANSFORMER",     // uppercase, single word, 4–9 letters
  clue: "...",               // one sentence, no giveaway
  topic: "AI",
  explanation: "...",        // 2–3 sentences on why it matters
  sourceUrl: "https://...",
  sourceLabel: "...",
}
```

The daily puzzle is `puzzleNumber % PUZZLES.length`, so adding entries changes
which puzzle falls on which day. The bank currently holds 60.

## Deploying

Push to GitHub and import the repo on Vercel. No environment variables, no
database — it builds and runs as-is.

## Layout

```
app/page.tsx        resolves the daily puzzle server-side
components/Game.tsx game state, keyboard handling, persistence
lib/game.ts         guess evaluation, daily rotation, share text
lib/puzzles.ts      the puzzle bank
lib/stats.ts        localStorage stats and saved games
```
