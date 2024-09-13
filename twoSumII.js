/* eslint-disable no-unused-vars */
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
	// Pointers to the start and end of the numbers array.
	let start = 0;
	let end = numbers.length - 1;

	// Iterate while the start < end.
	while (start < end) {
		let sum = numbers[start] + numbers[end];

		// If the sum matches target, return indices.
		if (sum === target) return [start + 1, end + 1];

		// If the sum of the numbers is less than the target, move start.
		if (sum < target) {
			start++;
		} else {
			end--;
		}
	}
};
