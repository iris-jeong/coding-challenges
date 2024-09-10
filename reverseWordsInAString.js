/* eslint-disable no-unused-vars */
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
	let result = '';
	let n = s.length;
	let i = n - 1;

	// Skip all the trailing spaces.
	while (i >= 0 && s[i] === ' ') {
		i--;
	}

	// Traverse from right to left.
	while (i >= 0) {
		let end = i;

		// Iterate until you find the start of the word (i.e. until you reach a space).
		while (i >= 0 && s[i] !== ' ') {
			i--;
		}

		// Add the word to the result.
		let word = s.slice(i + 1, end + 1);

		// Add a space between words.
		if (result.length > 0) {
			result += ' ';
		}

		result += word;

		// Skip spaces between words.
		while (i >= 0 && s[i] === ' ') {
			i--;
		}
	}

	return result;
};
