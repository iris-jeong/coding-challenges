/* 
  -- INSTRUCTIONS --
  Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.
  The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

  Examples:
  "String" => "StRiNg"
  "Weird string case" => "WeIrD StRiNg CaSe"
*/

/* SOLUTION */
// eslint-disable-next-line no-unused-vars
function toWeirdCase(string) {
	let newStr = "";

	// Split the string into words
	const words = string.split(" ");

	// For each word, uppercase the even indexed letters
	for (let i = 0; i < words.length; i++) {
		for (let j = 0; j < words[i].length; j++) {
			if (j % 2 === 0) {
				newStr += words[i].charAt(j).toUpperCase();
			} else {
				newStr += words[i].charAt(j).toLowerCase();
			}
		}

		newStr += " ";
	}

	return newStr.trim();
}
