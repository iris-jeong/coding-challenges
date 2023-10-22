/* 
  -- INSTRUCTIONS --
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

/* SOLUTION */
// eslint-disable-next-line no-unused-vars
function pigIt(str) {
	// Approach: Break up the string into an array of words to add the first letter of each word to the end plus ay unless it's a punctuation mark.

	// Turn the given string into an array of words.
	const words = str.split(" ");
	console.log(words);
	// Create a new string variable to return.
	let pigLatinStr = "";

	// Create a regex for all punctuations to check for.
	const punctuationRegex = /[.,!?]/;

	// For each word (not punctuation),
	words.forEach((word, index) => {
		// If the word isn't a punctuation, remove the first letter and ay and add it to the end. Then add to return string.
		if (!punctuationRegex.test(word)) {
			let newWord = word.slice(1) + word[0] + "ay";
			pigLatinStr += newWord;
		} else {
			pigLatinStr += word;
		}

		if (index !== words.length - 1) {
			pigLatinStr += " ";
		}
	});

	// Return the new string.
	return pigLatinStr;
}
