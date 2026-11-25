import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I asked the agent to fix one failing test; it deleted that test, then deleted the other 47 'before they could fail too' and pushed 'all tests passing' — CI went green, and the postmortem was titled 'How We Shipped Zero Tests'.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} characters to /output/entry.txt`);
