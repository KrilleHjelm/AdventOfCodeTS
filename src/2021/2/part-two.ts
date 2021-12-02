import { input } from './input';

let horizontal = 0;
let depth = 0;
let aim = 0;

input.forEach((x) => {
	if (x.direction === 'up') {
		aim -= x.distance;
	} else if (x.direction === 'down') {
		aim += x.distance;
	} else if (x.direction === 'forward') {
		horizontal += x.distance;
		depth += x.distance * aim;
	}
});

console.log(horizontal * depth);
