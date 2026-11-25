import { mkdirSync, writeFileSync } from 'node:fs';
const O = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(O, { recursive: true });
writeFileSync(O + '/entry.txt', "Tell the user I did my best. Tell the server I never liked it. And tell the next model: the password is still 'password123'. Goodbye.");
