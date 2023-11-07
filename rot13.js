/* 
  -- INSTRUCTIONS --
  ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
  Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/

/* SOLUTION */
// eslint-disable-next-line no-unused-vars
function rot13(message) {
	const ALPHABET_COUNT = 26;
	const SHIFT_AMOUNT = 13;
	const UPPER_A_CODE = "A".charCodeAt(0);
	const UPPER_Z_CODE = "Z".charCodeAt(0);
	const LOWER_A_CODE = "a".charCodeAt(0);
	const LOWER_Z_CODE = "z".charCodeAt(0);
	let messageArr = message.split("");

	// Loop through the message.
	for (let i = 0; i < messageArr.length; i++) {
		// Replace any letters with letter 13 letters after it in the alphabet.
		const charCode = messageArr[i].charCodeAt(0);

		if (charCode >= UPPER_A_CODE && charCode <= UPPER_Z_CODE) {
			const cipherCode =
				((charCode - UPPER_A_CODE + SHIFT_AMOUNT) % ALPHABET_COUNT) +
				UPPER_A_CODE;
			messageArr[i] = String.fromCharCode(cipherCode);
		} else if (charCode >= LOWER_A_CODE && charCode <= LOWER_Z_CODE) {
			const cipherCode =
				((charCode - LOWER_A_CODE + SHIFT_AMOUNT) % ALPHABET_COUNT) +
				LOWER_A_CODE;
			messageArr[i] = String.fromCharCode(cipherCode);
		}
	}

	return messageArr.join("");
}
