import { readFileSync } from 'fs';
import * as path from 'path';

export const input = readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
	.toString()
	.trim()
	.split('\n');
