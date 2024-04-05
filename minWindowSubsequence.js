/* eslint-disable no-unused-vars */
/* 
  -- INSTRUCTIONS --
  Given two strings, str1 and str2, find the shortest substring in str1 such that str2 is a subsequence of that substring.
  A substring is defined as a contiguous sequence of characters within a string. 
  A subsequence is a sequence that can be derived from another sequence by deleting zero or more elements without changing the order of the remaining elements.
  Let’s say you have the following two strings:
  str1 = "abbcb”
  str2 = “ac”

  In this example, “abbc” is a substring of str1, from which we can derive str2 simply by deleting both the instances of the character b. 
  Therefore, str2 is a subsequence of this substring. 
  Since this substring is the shortest among all the substrings in which str2 is present as a subsequence, the function should return this substring, that is, “abbc”.
  If there is no substring in str1 that covers all characters in str2, return an empty string.
  If there are multiple minimum-length substrings that meet the subsequence requirement, return the one with the left-most starting index.

  Constraints:
  1 ≤ str1.length ≤ 2 * 10^3
  1 ≤ str2.length ≤ 100
  str1 and str2 consist of uppercase and lowercase English letters.
*/

/* SOLUTION */
function minWindow(str1, str2) {
	// Initialize variables.
	const sizeStr1 = str1.length;
	const sizeStr2 = str2.length;
	let minSubLen = Infinity;
	let indexStr1 = 0;
	let indexStr2 = 0;
	let minSubsequence = '';

	// Iterate through str1.
	while (indexStr1 < sizeStr1) {
		// Check for potential start of the subsequence.
		if (str1[indexStr1] === str2[indexStr2]) {
			// Increment str2 pointer.
			indexStr2++;

			// Check if str2 has reached the end.
			if (indexStr2 === sizeStr2) {
				let start = indexStr1;
				let end = indexStr1;

				// Backtrack and decrement str2's pointer until all  chars of str2 are found in str1.
				indexStr2--;
				while (indexStr2 >= 0) {
					if (str1[start] === str2[indexStr2]) {
						indexStr2--;
					}
					// Decrement the start pointer every time to find the starting point of the subsequence.
					start--;
				}
				start++;

				// Check if the minSubLen pointed to by start and end is smaller than the current minSubLen.
				if (end - start + 1 < minSubLen) {
					minSubLen = end - start + 1;

					// Update the minimum subsequence string.
					minSubsequence = str1.slice(start, end + 1);
				}

				// Set str1 pointer to start continue checking in str1 after this discovered sequence.
				// Reset str2 pointer.
				indexStr1 = start;
				indexStr2 = 0;
			}
		}
		// Increment str1 pointer to the next character.
		indexStr1++;
	}

	// Return the minimum window subsequence.
	return minSubsequence;
}
