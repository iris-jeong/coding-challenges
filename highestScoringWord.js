/* 
  -- INSTRUCTIONS --
  Given a string of words, you need to find the highest scoring word.
  Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
  For example, the score of abad is 8 (1 + 2 + 1 + 4).
  You need to return the highest scoring word as a string.
  If two words score the same, return the word that appears earliest in the original string.
  All letters will be lowercase and all inputs will be valid.
*/

/* SOLUTION */
// eslint-disable-next-line no-unused-vars
function high(x) {
	// Create a map with letter and score.
	const alphabet = "abcdefghijklmnopqrstuvwxyz";
	let scoreMap = new Map();
	let position = 1;
	alphabet.split("").forEach((letter) => {
		scoreMap.set(letter, position);
		position++;
	});

	// Create a variable to hold the word with the highest score.
	let highWord = "";

	// Create a variable to hold the highest score.
	let highScore = -1;

	// For each word, count up its score.
	x.split(" ").forEach((word) => {
		let score = 0;
		word.split("").forEach((letter) => {
			if (scoreMap.get(letter)) {
				score += scoreMap.get(letter);

				if (score > highScore) {
					highWord = word;
					highScore = score;
				}
			}
		});
	});
	return highWord;
}
