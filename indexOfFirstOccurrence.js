/* eslint-disable no-unused-vars */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
	// Loop through haystack.
	for (let i = 0; i < haystack.length; i++) {
		// Check if the substring starting at i matches needle.
		let substring = haystack.substring(i, i + needle.length);
		if (substring === needle) return i;
	}

	return -1;
};
