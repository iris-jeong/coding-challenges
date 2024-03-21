/* eslint-disable no-unused-vars */
/* 
  -- INSTRUCTIONS --
  Given an array, colors, which contains a combination of the following three elements:
  - 0 (representing red)
  - 1(representing white)
  - 2 (representing blue)

  Sort the array in place so that the elements of the same color are adjacent, with the colors in the order of red, white, and blue. 
  To improve your problem-solving skills, do not utilize the built-in sort function.
*/

/* SOLUTION */
function sortColors(colors) {
	// Declare three pointers to current, start, and end.
	let current = 0;
	let start = 0;
	let end = colors.length - 1;

	// Iterate through the colors array while current is less than or equal to end
	while (current <= end) {
		// If current color is 0, swap its value with start color and increment both pointers.
		if (colors[current] === 0) {
			let temp = colors[start];
			colors[start] = colors[current];
			colors[current] = temp;

			start++;
			current++;
		} else if (colors[current] === 1) {
			// Else if current color is 1, increment current pointer.
			current++;
		} else {
			// Else, current is 2, so swap its value with end color, then decrement the end pointer.
			let temp = colors[end];
			colors[end] = colors[current];
			colors[current] = temp;

			end--;
		}
	}

	return colors;
}
