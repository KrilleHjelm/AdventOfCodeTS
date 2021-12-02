import { input } from './input';

input.forEach((n) => {
	let num = 2020 - n;
	input.forEach((m) => {
		if (m === num) {
			console.log(m * n);
		}
	});
});
