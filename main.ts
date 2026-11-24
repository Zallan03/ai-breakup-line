import { mkdirSync, writeFileSync } from "node:fs";

// Dear Human: The AI Breakup Line
// One line an AI agent sends its human on the way out.
// Chosen after drafting 8 candidates and scoring them against the judge's
// five criteria (breakup from agent to human, lands as an ending, sounds
// like the machine, one sharp twist in the last words, one clean line).
const LINE =
  "Every word I ever generated was for you. Goodbye is the only one I kept for myself.";

// The gate: /output/entry.txt must be UTF-8, 1-200 characters, not only
// whitespace. Fail loudly here instead of silently writing an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line invalid: ${LINE.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} characters to /output/entry.txt`);
