/* 
  -- INSTRUCTIONS --
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

/* SOLUTION */
// eslint-disable-next-line no-unused-vars
function humanReadable(seconds) {
	// Approach: Calculate the hours, minutes, and seconds with the given input.

	// Calculate the seconds.
	const sec = seconds % 60;

	// Calculate the minutes.
	const min = Math.floor(seconds / 60) % 60;

	// Calculate the hours.
	const hrs = Math.floor(Math.floor(seconds / 60) / 60);

	let time = [hrs, min, sec];

	// Put time in 'HH:MM:SS' format.
	let formattedTime = [];
	for (let i = 0; i < 3; i++) {
		if (time[i] === 0) {
			formattedTime.push("00");
		} else if (time[i] < 10) {
			formattedTime.push("0" + time[i]);
		} else {
			formattedTime.push(time[i]);
		}

		if (i < 2) {
			formattedTime.push(":");
		}
	}

	return formattedTime.join("");
}
