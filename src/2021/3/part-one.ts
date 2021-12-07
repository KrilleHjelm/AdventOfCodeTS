import { input } from './input';

let gamma: string[] = [];
let epsilon: string[] = [];

for (let i = 0; i < input[0].length - 1; i++) {
	gamma[i] = input.filter((x) => x[i] == '1').length > input.length / 2 ? '1' : '0';
	epsilon[i] = input.filter((x) => x[i] == '1').length < input.length / 2 ? '1' : '0';
}

const gammaValue = parseInt(gamma.join(''), 2);
const epsilonValue = parseInt(epsilon.join(''), 2);

console.log(gammaValue * epsilonValue);
