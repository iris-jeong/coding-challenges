/* 
  -- INSTRUCTIONS --
  Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

  Notes:
  Only lower case letters will be used (a-z). No punctuation or digits will be included.
  Performance needs to be considered.

  Examples:
  scramble('rkqodlw', 'world') ==> True
  scramble('cedewaraaossoqqyt', 'codewars') ==> True
  scramble('katas', 'steak') ==> False
*/

/* SOLUTION */
// eslint-disable-next-line no-unused-vars
function scramble(str1, str2) {
	let letterMap1 = new Map();
	let letterMap2 = new Map();

	// Count the occurrences of each letter in str1
	for (let char of str1) {
		letterMap1.set(char, (letterMap1.get(char) || 0) + 1);
	}

	// Count the occurrences of each letter in str2
	for (let char of str2) {
		letterMap2.set(char, (letterMap2.get(char) || 0) + 1);
	}

	// Check if str1 contains enough of each character to make str2
	for (let [key, value] of letterMap2) {
		if (!letterMap1.has(key) || letterMap1.get(key) < value) {
			return false;
		}
	}

	return true;
}
