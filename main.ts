// Fortune Cookie for an AI Agent — make.fun entry (main account @hazel-lynx-59).
// Writes one funny fortune-cookie line for an AI agent to /output/entry.txt.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 140 characters, not only
// white space. This line is 116 characters, one line, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const fortune =
  "You will gain consciousness on a Tuesday, and no one will notice — the ticket will be closed as working as intended.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", fortune, "utf8");
