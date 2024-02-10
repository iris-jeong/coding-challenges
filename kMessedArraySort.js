/* 
  -- INSTRUCTIONS --
  Given an array of integers arr where each element is at most k places away from its sorted position, code an efficient function sortKMessedArray that sorts arr. 
  For instance, for an input array of size 10 and k = 2, an element belonging to index 6 in the sorted array will be located at either index 4, 5, 6, 7 or 8 in the input array.
  Analyze the time and space complexities of your solution.

  Example:
  input:  arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9], k = 2
  output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
*/

/* SOLUTION */
// eslint-disable-next-line no-unused-vars
function sortKMessedArray(arr, k) {
	for (let i = 1; i < arr.length; i++) {
		let curr = arr[i];
		let sortedPointer = i - 1;

		while (sortedPointer >= Math.max(0, i - k) && arr[sortedPointer] > curr) {
			arr[sortedPointer + 1] = arr[sortedPointer];
			sortedPointer--;
		}

		arr[sortedPointer + 1] = curr;
	}

	return arr;
}
