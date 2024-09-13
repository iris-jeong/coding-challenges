/* eslint-disable no-unused-vars */
/* eslint-disable no-redeclare */
/* 
  -- INSTRUCTIONS --
  A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
  Given a string s, return true if it is a palindrome, or false otherwise.
  
  Example 1:
  Input: s = "A man, a plan, a canal: Panama"
  Output: true
  Explanation: "amanaplanacanalpanama" is a palindrome.
  Example 2:
  Input: s = "race a car"
  Output: false
  Explanation: "raceacar" is not a palindrome.
  Example 3:
  Input: s = " "
  Output: true
  Explanation: s is an empty string "" after removing non-alphanumeric characters.
  Since an empty string reads the same forward and backward, it is a palindrome.
  
  Constraints:
  1 <= s.length <= 2 * 105
  s consists only of printable ASCII characters.
*/

/* SOLUTION */
var isPalindrome = function (s) {
	// Remove any non-alphanumeric characters from the string
	// Create variable to hold updated string
	let updatedStr = '';

	let aCode = 'a'.charCodeAt(0);
	let zCode = 'z'.charCodeAt(0);
	let capitalACode = 'A'.charCodeAt(0);
	let capitalZCode = 'Z'.charCodeAt(0);
	let zeroCode = '0'.charCodeAt(0);
	let nineCode = '9'.charCodeAt(0);

	//Loop through string
	for (let char of s.toLowerCase()) {
		let charCode = char.charCodeAt(0);

		//If the letter is a letter or number, add it to the updated string
		if (
			(charCode >= aCode && charCode <= zCode) ||
			(charCode >= capitalACode && charCode <= capitalZCode) ||
			(charCode >= zeroCode && charCode <= nineCode)
		) {
			updatedStr += char;
		}
	}

	// Create a pointer to the front of the string and the back
	let front = 0;
	let back = updatedStr.length - 1;

	// Loop through the string until the pointers are equal or the front pointer is > or back is < than front
	for (let i = 0; i < updatedStr.length; i++) {
		// Return false if the letters are not the same.
		if (updatedStr[front] !== updatedStr[back]) {
			return false;
		}
		front++;
		back--;
	}

	return true;
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
	s = s.toLowerCase();

	// Create pointers to the front and back of the given string.
	let start = 0;
	let end = s.length - 1;

	while (start < end) {
		// Skip all the non-alphanumeric characters.
		while (!isAlphanumeric(s[start])) {
			start++;
		}
		while (!isAlphanumeric(s[end])) {
			end--;
		}

		// Compare characters and return false if they don't match.
		if (s[start] !== s[end]) return false;

		// Otherwise move the pointers towards each other.
		start++;
		end--;
	}

	return true;
};

function isAlphanumeric(str) {
	return /^[a-z0-9]/.test(str);
}
