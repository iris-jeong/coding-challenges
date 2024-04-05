/* eslint-disable no-unused-vars */
/* 
  -- INSTRUCTIONS --
  Given a string s and an integer k, find the length of the longest substring in s, where all characters are identical, after replacing, at most, k characters with any other lowercase English character.

  Constraints:
  1 ≤ s.length ≤ 10^3
  0 ≤ k ≤ s.length
  s consists of only lowercase English characters
*/

/* SOLUTION */
function longestRepeatingCharacterReplacement(s, k) {
	// Initialize variables.
	const strLen = s.length;
	let maxStrLen = 0;
	let start = 0;
	const charFreq = new Map();
	let mostFreqChar = 0;

	// Iterate over the input string.
	for (let end = 0; end < strLen; end++) {
		// If the new char is not in the map add it, else increment its frequency.
		charFreq.set(s[end], (charFreq.get(s[end]) || 0) + 1);

		// Update the most frequent char.
		mostFreqChar = Math.max(mostFreqChar, charFreq.get(s[end]));

		// If the number of replacements in the current window have exceeded the limit, slide the window.
		if (end - start + 1 - mostFreqChar > k) {
			charFreq.set(s[start], charFreq.get(s[start] - 1));
			start += 1;
		}

		// If this window is the longest so far, update the length of the max substring.
		maxStrLen = Math.max(end - start + 1, maxStrLen);
	}

	// Return the length of the max substring with the same chars after replacement(s).
	return maxStrLen;
}
