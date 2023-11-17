/* 
  -- INSTRUCTIONS --
  The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. 
  Ignore capitalization when determining if a character is a duplicate.

  Examples:
  "din"      =>  "((("
  "recede"   =>  "()()()"
  "Success"  =>  ")())())"
  "(( @"     =>  "))((" 

  Notes:
  Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

/* SOLUTION */
// eslint-disable-next-line no-unused-vars
function duplicateEncode(word) {
	// Keep track of all the occurrences of each letter.
	let occurrences = {};

	// Loop through the word and count each letter's occurrence.
	for (let i = 0; i < word.length; i++) {
		// Make the letter case insensitive.
		const letter = word[i].toLowerCase();
		// If the letter exists in object, then add 1 to its corresponding count.
		if (occurrences[letter]) {
			occurrences[letter]++;
		} else {
			// Otherwise add it to the object and set the count to 1.
			occurrences[letter] = 1;
		}
	}

	// Create variable to hold the encoded string.
	let encoded = "";
	// Loop through the word again and output either '(' or ')'
	for (let i = 0; i < word.length; i++) {
		const letter = word[i].toLowerCase();
		if (occurrences[letter] > 1) {
			encoded += ")";
		} else {
			encoded += "(";
		}
	}
	// Return the encoded string.
	return encoded;
}
