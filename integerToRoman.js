/* eslint-disable no-unused-vars */
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
	// Create a map of integers to Roman numerals in descending order.
	let romanMap = [
		[1000, 'M'],
		[900, 'CM'],
		[500, 'D'],
		[400, 'CD'],
		[100, 'C'],
		[90, 'XC'],
		[50, 'L'],
		[40, 'XL'],
		[10, 'X'],
		[9, 'IX'],
		[5, 'V'],
		[4, 'IV'],
		[1, 'I'],
	];

	let result = '';

	// Iterate through the Roman map.
	for (let [value, symbol] of romanMap) {
		// Keep subtracting the value from num and adding the symbol to result.
		while (num >= value) {
			result += symbol;
			num -= value;
		}
	}

	return result;
};
