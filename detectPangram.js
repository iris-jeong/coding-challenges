/* 
  -- INSTRUCTIONS --
  A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
  Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
  ""  -->  ""
*/

/* SOLUTION */
// eslint-disable-next-line no-unused-vars
function isPangram(string) {
	// Make the string case insensitive.
	const stringLowered = string.toLowerCase();

	// Create an array with each letter in the alphabet.
	let alphabet = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
	];

	// Loop through the given string.
	stringLowered.split("").forEach((char) => {
		// If that letter is found in the alphabet array, remove it from the alphabet array.
		if (alphabet.indexOf(char) !== -1) {
			const charIndex = alphabet.indexOf(char);
			alphabet.splice(charIndex, 1);
		}
	});

	// Return true if the alphabet array is empty, false otherwise.
	return alphabet.length === 0 ? true : false;
}
