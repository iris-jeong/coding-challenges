/* eslint-disable no-unused-vars */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
	// Initialize first word as the common prefix.
	let prefix = strs[0];

	// Traverse the strs array starting at second word.
	for (let i = 1; i < strs.length; i++) {
		let currentWord = strs[i];

		// Iterate through the current word until the letters don't match.
		let j = 0;
		while (
			j < currentWord.length &&
			j < prefix.length &&
			currentWord[j] === prefix[j]
		) {
			j++;
		}

		// Update the common prefix.
		prefix = currentWord.slice(0, j);
	}

	return prefix;
};
