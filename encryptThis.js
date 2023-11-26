/* 
  -- INSTRUCTIONS --
  You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:
  Your message is a string containing space separated words.
  You need to encrypt each word in the message using the following rules:
  The first letter must be converted to its ASCII code.
  The second letter must be switched with the last letter
  Keepin' it simple: There are no special characters in the input.
  Examples:
  encryptThis("Hello") === "72olle"
  encryptThis("good") === "103doo"
  encryptThis("hello world") === "104olle 119drlo"
*/

/* SOLUTION */
// eslint-disable-next-line no-unused-vars
var encryptThis = function (text) {
	let newStr = "";
	const textArr = text.split(" ");

	for (let i = 0; i < textArr.length; i++) {
		const word = textArr[i];
		if (word.length > 0) {
			// Add ASCII code of the first character.
			newStr += word.charCodeAt(0);

			// If word length is 2, add second character.
			if (word.length === 2) {
				newStr += word.charAt(1);
			} else if (word.length > 2) {
				// Swap second and last characters.
				newStr += word.charAt(word.length - 1);
				newStr += word.slice(2, word.length - 1);
				newStr += word.charAt(1);
			}
			newStr += " ";
		}
	}

	return newStr.trim();
};
