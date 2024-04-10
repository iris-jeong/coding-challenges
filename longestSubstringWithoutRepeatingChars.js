/* eslint-disable no-unused-vars */
/* 
  -- INSTRUCTIONS --
  Given a string, str, return the length of the longest substring without repeating characters.

  Constraints:
  1 ≤ str.length ≤ 1000
  str consists of English letters, digits, and spaces.
*/

/* SOLUTION */
function findLongestSubstring(str) {
	if (str.length === 0) return 0;

	let left = 0;
	let maxLength = 0;
	const seenChars = new Set();

	// Iterate through the length of the string.
	for (let right = 0; right < str.length; right++) {
		// If the char has already been seen, move the pointer to the start of the new substring.
		while (seenChars.has(str[right])) {
			seenChars.delete(str[left]);
			left++;
		}
		// Otherwise, add it to the set and update the max length of the substring w/o repeating characters.
		seenChars.add(str[right]);
		maxLength = Math.max(maxLength, right - left + 1);
	}

	return maxLength;
}
