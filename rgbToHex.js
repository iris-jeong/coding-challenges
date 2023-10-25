/* 
  -- INSTRUCTIONS --
  The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

  Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

  Examples (input --> output):
  255, 255, 255 --> "FFFFFF"
  255, 255, 300 --> "FFFFFF"
  0, 0, 0       --> "000000"
  148, 0, 211   --> "9400D3"
*/

/* SOLUTION */
// eslint-disable-next-line no-unused-vars
function rgb(r, g, b) {
	// Approach: Make sure the values are in range, convert each color to hexadecimal, then format it.

	// Clamp the values to the 0-255 range.
	r = Math.max(0, Math.min(255, r));
	g = Math.max(0, Math.min(255, g));
	b = Math.max(0, Math.min(255, b));

	// Convert each color to hexadecimal using base 16.
	let red = r.toString(16);
	let green = g.toString(16);
	let blue = b.toString(16);

	// Format with leading zeros if hexadecimal is a single digit.
	if (red.length === 1) {
		red = "0" + red;
	}
	if (green.length === 1) {
		green = "0" + green;
	}
	if (blue.length === 1) {
		blue = "0" + blue;
	}

	const hex = red + green + blue;

	return hex.toUpperCase();
}
