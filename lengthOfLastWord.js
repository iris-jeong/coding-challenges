/* eslint-disable no-unused-vars */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
	let length = 0;

	for (let i = s.length - 1; i >= 0; i--) {
		if (s[i] === ' ' && length === 0) continue;
		else if (s[i] === ' ') break;
		length++;
	}

	return length;
};
