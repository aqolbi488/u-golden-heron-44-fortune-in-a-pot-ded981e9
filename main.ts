import { mkdirSync, writeFileSync } from "node:fs";

// A kind, funny fortune for the houseplant on the windowsill.
// Deterministic: the same fixed line on every run.
const FORTUNE =
  "Soon the sun will linger on your leaves, your keeper will water you on time, and you will outgrow this windowsill.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE + "\n", "utf8");
