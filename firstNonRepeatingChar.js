/* 
  -- INSTRUCTIONS --
  Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.
  For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

  As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.
  If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.
*/

/* SOLUTION */
// eslint-disable-next-line no-unused-vars
function firstNonRepeatingLetter(s) {
	let repeatedLetters = new Set();
	let nonRepeatChar = "";
	let loweredS = s.toLowerCase();

	for (let i = 0; i < s.length; i++) {
		let letter = s[i];

		// Check if the letter occurs more than once ensuring case insensitivity.
		let loweredChar = letter.toLowerCase();

		// If it's not repeated and it's not in the set of repeated letters, the non-repeating character is found.
		if (
			loweredS.indexOf(loweredChar, i + 1) === -1 &&
			!repeatedLetters.has(letter)
		) {
			nonRepeatChar = letter;
			break;
		} else {
			// Otherwise add the letter to group of repeated letters.
			repeatedLetters.add(letter);
		}
	}

	return nonRepeatChar;
}
