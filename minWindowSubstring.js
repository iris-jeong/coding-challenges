/* eslint-disable no-unused-vars */
/* 
  -- INSTRUCTIONS --
  Given two strings, s and t, find the minimum window substring in s, which has the following properties:
  1. It is the shortest substring of s that includes all of the characters present in t.
  2. It must contain at least the same frequency of each character as in t.
  3. The order of the characters does not matter here.
  Note: If there are multiple valid minimum window substrings, return any one of them.

  Constraints:
  1 ≤ s.length, t.length ≤ 10^3
  Strings s and t consist of uppercase and lowercase English characters.
*/

/* SOLUTION */
function minWindow(s, t) {
	if (t === '') {
		return '';
	}

	// Initialize hash maps.
	let tCharFreq = {};
	let windowCharFreq = {};

	// Initialize the frequency of each char in t and the window.
	for (let i = 0; i < t.length; i++) {
		const char = t[i];
		tCharFreq[char] = (tCharFreq[char] || 0) + 1;
		windowCharFreq[char] = 0;
	}

	// Set up the conditional variables.
	let currCount = 0;
	let reqCount = Object.keys(tCharFreq).length;

	// Set up variable containing the result's starting and end point w/ default values and length variable.
	let result = [-1, -1];
	let resultLen = Infinity;

	// Set up the sliding window pointers.
	let start = 0;
	// Iterate over s.
	for (let end = 0; end < s.length; end++) {
		const char = s[end];

		// If the current char occurs in t, update its frequency in window hash map.
		if (t.indexOf(char) !== -1) {
			windowCharFreq[char] = 1 + (windowCharFreq[char] || 0);
		}
		// Check if the frequency of the current character appeared the same number of times in the current window as it appears in t.
		if (tCharFreq[char] && windowCharFreq[char] === tCharFreq[char]) {
			currCount += 1;
		}
		// Adjust the sliding window.
		// If currCount and reqCount are equal that means we've found a substring that meets our requirements.
		// Start reducing the size of the current window to find a shorter substring that still meets requirements.
		while (currCount === reqCount) {
			// Update the result.
			if (end - start + 1 < resultLen) {
				result = [start, end];
				resultLen = end - start + 1;
			}

			// Move the start pointer forward, decrementing the frequency of the char being dropped out of the window.
			// This moves all unnecessary chars present at the start of the substring.
			const startChar = s[start];
			if (t.indexOf(startChar) !== -1) {
				windowCharFreq[startChar] -= 1;
			}

			// If the char was among the required chars and removing it reduced its freq below its freq in t, decrement currCount
			if (
				tCharFreq[startChar] &&
				windowCharFreq[startChar] < tCharFreq[startChar]
			) {
				currCount -= 1;
			}
			start += 1;
		}
	}

	const [leftIndex, rightIndex] = result;

	// Return the minimum window substring.
	return resultLen !== Infinity ? s.slice(leftIndex, rightIndex + 1) : '';
}
