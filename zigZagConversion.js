/* eslint-disable no-unused-vars */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
	// If there's only one row return s.
	if (numRows === 1) return s;

	// Create an array to hold strings for each row.
	let rows = Array(Math.min(numRows, s.length)).fill(''); // No more rows than the length of the string.
	let currRow = 0;
	let goingDown = false;

	// Iterate over the string and place characters in the appropriate row.
	for (let c of s) {
		rows[currRow] += c; // Add character to the current row.

		// If we're at the top or bottom row, change direction.
		if (currRow === 0 || currRow === numRows - 1) {
			goingDown = !goingDown;
		}

		// Move to the next row.
		currRow += goingDown ? 1 : -1;
	}

	// Concatenate the rows for final result.
	return rows.join('');
};
