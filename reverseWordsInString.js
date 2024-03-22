/* eslint-disable no-unused-vars */
/* 
  -- INSTRUCTIONS --
  Given a sentence, reverse the order of its words without affecting the order of letters within the given word.

  Constraints:
  - The sentence contains English uppercase and lowercase letters, digits, and spaces.
  - 1 ≤ sentence.length ≤ 10^4 
  - The order of the letters within a word is not to be reversed.

  Note: The input string may contain leading or trailing spaces or multiple spaces between words. 
  The returned string, however, should only have a single space separating each word. 
  Do not include any extra spaces.
*/

/* SOLUTION */
function reverseString(sentence, start, end) {
	let split = sentence.split('');

	while (start < end) {
		let temp = split[start];
		split[start] = split[end];
		split[end] = temp;

		start++;
		end--;
	}

	return split.join('');
}

function reverseWords(sentence) {
	// Remove any extra white space and any leading or trailing white space.
	sentence = sentence.replace(/\s+/g, ' ').trim();

	// Reverse the entire string.
	sentence = reverseString(sentence, 0, sentence.length - 1);

	// Iterate over the reversed string using two pointers, start and end, initialized to index 0.
	for (let start = 0, end = 0; end <= sentence.length; end++) {
		// When end points to a space or we've reached the end of the sentence, reverse the word pointed by start and end - 1.
		if (sentence[end] === ' ' || end === sentence.length) {
			// Reverse the word
			sentence = reverseString(sentence, start, end - 1);

			// Update the start pointer
			start = end + 1;
		}
	}

	return sentence;
}
