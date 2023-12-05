/* 
  -- INSTRUCTIONS --
  You are given a secret message you need to decipher. Here are the things you need to know to decipher it:
  For each word:
  the second and the last letter is switched (e.g. Hello becomes Holle)
  the first letter is replaced by its character code (e.g. H becomes 72)
  Note: there are no special characters used, only letters and spaces

  Examples:
  decipherThis('72olle 103doo 100ya'); // 'Hello good day'
  decipherThis('82yade 115te 103o'); // 'Ready set go'
*/

/* SOLUTION */
// eslint-disable-next-line no-unused-vars
function decipherThis(str) {
	const words = str.split(' ');

	const decipheredWords = words.map((word) => {
		// Extract the numeric part.
		const numPart = parseInt(word.match(/^\d+/)[0]);

		// Replace the numeric part with its corresponding character
		let decipheredWord =
			String.fromCharCode(numPart) +
			word.substring(numPart.toString().length);

		// If there are more than two characters, switch the second and the last
		if (decipheredWord.length > 2) {
			decipheredWord =
				decipheredWord[0] +
				decipheredWord[decipheredWord.length - 1] +
				decipheredWord.substring(2, decipheredWord.length - 1) +
				decipheredWord[1];
		}
		return decipheredWord;
	});

	return decipheredWords.join(' ');
}
