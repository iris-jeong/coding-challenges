/* 
  -- INSTRUCTIONS --
  There is an array with some numbers. All numbers are equal except for one. Try to find it!
  findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
  findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
  It’s guaranteed that array contains at least 3 numbers.
  The tests contain some very huge arrays, so think about performance.
*/

/* SOLUTION */
// eslint-disable-next-line no-unused-vars
function findUniq(arr) {
	// Check first three items to determine if the first item is unique
	// If unique, return it
	if (arr[0] !== arr[1] && arr[0] !== arr[2]) return arr[0];

	// Iterate through the array starting from second element
	for (let i = 1; i < arr.length; i++) {
		// If current item isn't equal to the first item, it's unique
		if (arr[i] !== arr[0]) {
			return arr[i];
		}
	}
}
