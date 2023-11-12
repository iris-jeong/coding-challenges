/* 
  -- INSTRUCTIONS --
  Given a string of integers, return the number of odd-numbered substrings that can be formed.
  For example, in the case of "1341", they are 1, 1, 3, 13, 41, 341, 1341, a total of 7 numbers.
  solve("1341") = 7. See test cases for more examples.
*/

/* SOLUTION */
// eslint-disable-next-line no-unused-vars
function solve(s) {
	// Keep track of the count of odd-numbered substrings.
	let count = 0;

	// Loop through s to count up the odd-numbered substrings.
	for (let i = 0; i < s.length; i++) {
		// If the current digit at i is odd, then add to count.
		if (parseInt(s[i]) % 2 !== 0) {
			count++;
		}
		// Inner loop from one after i.
		for (let j = i + 1; j < s.length; j++) {
			// If the digit at j index is odd, add it to count.
			if (parseInt(s[j]) % 2 !== 0) {
				count++;
			}
		}
	}

	return count;
}
