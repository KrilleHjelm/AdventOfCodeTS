import { input } from './input';

let horizontal = 0;
let depth = 0;

input.forEach((x) => {
	if (x.direction == 'up') {
		depth -= x.distance;
	}
	if (x.direction == 'down') {
		depth += x.distance;
	}
	if (x.direction == 'forward') {
		horizontal += x.distance;
	}
});

console.log(horizontal * depth);
