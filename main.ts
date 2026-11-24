// One-line resignation letter entry (Node 22, standard library only).
// The letter is the entry.txt beside this file; the program copies it to
// /output/entry.txt, byte for byte, so both grader runs write the same
// bytes and the gate sees 97 characters of plain UTF-8 text.
// Run it outside the grader with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(
  new URL('./entry.txt', import.meta.url),
  join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.txt'),
);
