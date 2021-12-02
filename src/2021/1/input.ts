import { readFileSync } from 'fs';
import * as path from 'path';

export const input = readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
	.toString()
	.trim()
	.split('\n')
	.map((row: string) => parseInt(row, 10));
