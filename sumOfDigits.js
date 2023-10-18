/* 
  -- INSTRUCTIONS --
  Digital root is the recursive sum of all the digits in a number.
  Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

  Examples:
  16  -->  1 + 6 = 7
  942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
  132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
  493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/

/* SOLUTION */
// eslint-disable-next-line no-unused-vars
function digital_root(n) {
	// Approach: Recursively sum up the digits of n until n has a length of 1.

	// Split the number into digits.
	const digits = n.toString().split("");

	// Handle the base case where the number is one digit.
	if (digits.length === 1) {
		return n;
	}

	// Get the sum of the digits of number.
	let sum = 0;
	for (const digit of digits) {
		sum += parseInt(digit);
	}

	// Return the sum + recursive call of digital_root.
	return digital_root(sum);
}
