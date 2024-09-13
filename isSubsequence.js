/* eslint-disable no-unused-vars */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
	// Handle edge cases
	if (s === t) return true;
	if (s.length === 0 && t.length > 0) return true;

	// Create pointers initialized to the start of both strings.
	let sPtr = 0;
	let tPtr = 0;

	// Iterate until you reach the end of t.
	while (tPtr < t.length) {
		// If the chars aren't the same, move tPtr up.
		if (s[sPtr] !== t[tPtr]) {
			tPtr++;
		} else if (sPtr === s.length - 1) {
			// If the end of s is reached, it's a subsequence.
			return true;
		} else {
			sPtr++;
			tPtr++;
		}
	}

	return false;
};
