import { input } from './input';

for (var f = 0; f < input.length; f++) {
	const fNum = input[f];
	for (var s = 0; s < input.length; s++) {
		const sNum = input[s];
		for (var t = 0; t < input.length; t++) {
			const tNum = input[t];
			if (fNum + sNum + tNum === 2020) {
				console.log(fNum * sNum * tNum);
				break;
			}
		}
	}
}
