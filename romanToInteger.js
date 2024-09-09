/* eslint-disable no-unused-vars */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
	let romanMap = new Map([
		['I', 1],
		['IV', 4],
		['V', 5],
		['IX', 9],
		['X', 10],
		['XL', 40],
		['L', 50],
		['XC', 90],
		['C', 100],
		['CD', 400],
		['D', 500],
		['CM', 900],
		['M', 1000],
	]);

	s = s.toUpperCase();

	let integer = 0;
	let ptr = 0;

	while (ptr < s.length) {
		let romanNumerals = s.slice(ptr, ptr + 2);
		if (romanMap.has(romanNumerals)) {
			integer += romanMap.get(romanNumerals);
			ptr += 2;
		} else {
			integer += romanMap.get(s[ptr]);
			ptr++;
		}
	}
	return integer;
};
