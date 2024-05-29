/* eslint-disable no-unused-vars */
/* 
  -- INSTRUCTIONS --
  Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
*/

/* SOLUTION */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
	// Need to figure out which letters are non-repeating.
	// Create a map to count the occurrences.
	let occurrences = new Map();
	for (let char of s) {
		occurrences.set(char, occurrences.get(char) + 1 || 1);
	}
	// From those non-repeating letters, which one occurs first.
	// Filter for those that have a value of 1.
	const nonRepeatingChars = Array.from(occurrences.entries()).filter(
		(entry) => entry[1] === 1
	);

	// Get the indices of those that only occur once and find the smallest index.
	let indices = [];
	for (let charObj of nonRepeatingChars) {
		indices.push(s.indexOf(charObj[0]));
	}

	let smallestIndex = Infinity;
	for (let index of indices) {
		if (index < smallestIndex) {
			smallestIndex = index;
		}
	}

	if (smallestIndex === Infinity) return -1;
	return smallestIndex;
};
