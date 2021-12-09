import { input } from './input';

type BoardNumber = {
	Num: number;
	Checked: boolean;
};

let rows: BoardNumber[][] = input.map((row) =>
	row
		.split(' ')
		.map((n) => n.trim())
		.filter(Boolean)
		.map((c) => ({ Num: parseInt(c), Checked: false }))
);
console.log();
