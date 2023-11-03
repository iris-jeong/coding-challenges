/* 
  -- INSTRUCTIONS --
  Your job is to write a function which increments a string, to create a new string.
  If the string already ends with a number, the number should be incremented by 1.
  If the string does not end with a number. the number 1 should be appended to the new string.

  Examples:
  foo -> foo1
  foobar23 -> foobar24
  foo0042 -> foo0043
  foo9 -> foo10
  foo099 -> foo100

  Attention: If the number has leading zeros the amount of digits should be considered.
*/

/* SOLUTION */
// eslint-disable-next-line no-unused-vars
function incrementString(str) {
	// Find where the numeric part starts.
	let i = str.length;

	while (i > 0 && str[i - 1] >= "0" && str[i - 1] <= "9") {
		i--;
	}

	// Split the string into the prefix and the numeric part.
	const prefix = str.substring(0, i);
	const numericPart = str.substring(i);

	// If there's no numeric part, append '1'.
	if (numericPart === "") {
		return str + "1";
	}

	// Convert the numeric part to a number, increment it.
	let number = parseInt(numericPart) + 1;

	// Convert the incremented number back to a string.
	let incrementedStr = String(number);

	// If the incremented number is shorter than the original numeric part, pad with '0's.
	while (incrementedStr.length < numericPart.length) {
		incrementedStr = "0" + incrementedStr;
	}

	// Concatenate the prefix and the incremented number.
	return prefix + incrementedStr;
}
