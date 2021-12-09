import { input } from './input';

const calculateRating = (input: string[], isOxygenGeneratorRating: boolean): number => {
	for (let i = 0; i < input[0].length && input.length > 1; i++) {
		let zeros = 0;
		let ones = 0;

		for (let j = 0; j < input.length; j++) {
			if (input[j][i] === '0') {
				zeros++;
			} else {
				ones++;
			}
		}

		let num: number;
		if (isOxygenGeneratorRating) {
			num = zeros > ones ? 0 : 1;
		} else {
			num = zeros > ones ? 1 : 0;
		}

		input = input.filter((x) => x[i] === num.toString());
	}

	return parseInt(input[0], 2);
};

const oxygen: number = calculateRating(input, true);
const co: number = calculateRating(input, false);

console.log(oxygen * co);
