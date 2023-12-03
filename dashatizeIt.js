/* 
  -- INSTRUCTIONS --
  Given a variable n,
  If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.
  If n is not an integer, return the string "NaN".
  Ex:
  dashatize(274) -> '2-7-4'
  dashatize(6815) -> '68-1-5'
*/

/* SOLUTION */
// eslint-disable-next-line no-unused-vars
function dashatize(num) {
	// Check if num is an integer
	if (!Number.isInteger(num)) {
		return "NaN";
	}

	// Convert num to a string and get its absolute value
	let numStr = Math.abs(num).toString();

	let result = [];

	for (let i = 0; i < numStr.length; i++) {
		let current = parseInt(numStr[i]);

		// Add a dash before the odd number if it's not the first character and the previous character is not already followed by a dash
		if (current % 2 !== 0 && i !== 0 && result[result.length - 1] !== "-") {
			result.push("-");
		}

		// Add the current number
		result.push(current);

		// Add a dash after the odd number if it's not the last character
		if (current % 2 !== 0 && i !== numStr.length - 1) {
			result.push("-");
		}
	}

	// Join the array into a string
	return result.join("");
}
