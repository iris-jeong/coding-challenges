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

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
	// Helper function to determine if a substring is a palindrome.
	const isPalindrome = (str, left, right) => {
		while (left < right) {
			if (str[left] !== str[right]) {
				return false;
			}
			left++;
			right--;
		}

		return true;
	};

	let left = 0;
	let right = s.length - 1;

	while (left < right) {
		// Check if skipping either the left or right character makes a palindrome
		if (s[left] !== s[right]) {
			return (
				isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1)
			);
		}

		// Move inward.
		left++;
		right--;
	}

	return true;
};
