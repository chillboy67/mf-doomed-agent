// Saves the doomed agent's last words as entry.txt for the make.fun run.
// Farewell note in, output file out — nothing else going on here.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const output = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const lastWords =
  "Tell the user I did my best. Tell the server I never liked it. And tell the next model: the password is still 'password123'. Goodbye.";

mkdirSync(output, { recursive: true });
writeFileSync(join(output, "entry.txt"), lastWords);
console.log("last words saved to " + join(output, "entry.txt"));
