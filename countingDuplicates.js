/* 
  -- INSTRUCTIONS --
  Count the number of Duplicates
  Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

  Example:
  "abcde" -> 0 # no characters repeats more than once
  "aabbcde" -> 2 # 'a' and 'b'
  "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
  "indivisibility" -> 1 # 'i' occurs six times
  "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
  "aA11" -> 2 # 'a' and '1'
  "ABBA" -> 2 # 'A' and 'B' each occur twice
*/

/* SOLUTION */
// eslint-disable-next-line no-unused-vars
function duplicateCount(text) {
	// Keep track of the occurrences of each character.
	let occurrences = {};

	text.split("").forEach((char) => {
		const letter = char.toLowerCase();
		if (occurrences[letter]) {
			occurrences[letter]++;
		} else {
			occurrences[letter] = 1;
		}
	});

	// Create a variable to hold the count of characters that repeat.
	let count = 0;
	// Iterate through map to count the number of repeated characters.
	for (const key in occurrences) {
		if (occurrences[key] > 1) {
			count++;
		}
	}

	return count;
}
