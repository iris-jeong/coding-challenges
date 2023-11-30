/* 
  -- INSTRUCTIONS --
  Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".
  We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

  For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"
  -- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
  solve("zodiacs") = 26

  For the word "strength", solve("strength") = 57
  -- The consonant substrings are: "str" and "ngth" with values
*/

/* SOLUTION */
// eslint-disable-next-line no-unused-vars
function solve(s) {
	const values = {};
	// Assign values to the letters: 'a' = 1, 'b' = 2, ..., 'z' = 26
	for (let i = 0; i < 26; i++) {
		values[String.fromCharCode(97 + i)] = i + 1;
	}

	let maxValue = 0;
	let currentValue = 0;

	for (let char of s) {
		if ("aeiou".includes(char)) {
			// If the character is a vowel, reset current value.
			maxValue = Math.max(maxValue, currentValue);
			currentValue = 0;
		} else {
			// If the character is a consonant, add its value to current value.
			currentValue += values[char];
		}
	}

	// Check for the last substring.
	maxValue = Math.max(maxValue, currentValue);

	return maxValue;
}
