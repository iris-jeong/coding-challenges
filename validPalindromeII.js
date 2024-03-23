/* eslint-disable no-unused-vars */
/* 
  -- INSTRUCTIONS --
  Write a function that takes a string as input and checks whether it can be a valid palindrome by removing at most one character from it.

  Constraints:
  1 ≤ string.length ≤ 10^3
  The string only consists of English letters.
*/

/* SOLUTION */
function isPalindrome(s) {
	// Initialize pointers.
	let start = 0;
	let end = s.length - 1;

	// If the values at the left and right indices match, move both toward the middle until they meet.
	while (start <= end) {
		// Check for mismatch.
		if (s[start] !== s[end]) {
			// Skip element from both left and right to check for palindrome.
			return (
				checkForPalindrome(s, start + 1, end) ||
				checkForPalindrome(s, start, end - 1)
			);
		}
		start++;
		end--;
	}

	return true;
}

function checkForPalindrome(s, start, end) {
	while (start <= end) {
		if (s[start] !== s[end]) {
			return false;
		}
		start++;
		end--;
	}

	return true;
}
