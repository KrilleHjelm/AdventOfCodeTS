import { input } from './input';

let count = 0;
for (let i = 3; i < input.length; i++) {
	const current = input[i - 3] + input[i - 2] + input[i - 1];
	const next = input[i - 2] + input[i - 1] + input[i];
	if (next > current) {
		count++;
	}
}

console.log(count);
