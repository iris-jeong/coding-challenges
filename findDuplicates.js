/* 
  -- INSTRUCTIONS --
  Given two sorted arrays arr1 and arr2 of passport numbers, implement a function findDuplicates that returns an array of all passport numbers that are both arrays. Note that the output array should be sorted in ascending order.
  Let N and M be the lengths of arr1 and arr2, respectively. Solve for two cases and analyze the time & space complexities of your solutions: M ≈ N - the array lengths are approximately the same M ≫ N - arr2 is much bigger than arr1.

  Example:
  input:  arr1 = [1, 2, 3, 5, 6, 7], arr2 = [3, 6, 7, 8, 20]
  output: [3, 6, 7] # since only these three values are both in arr1 and arr2
*/

/* SOLUTION */
// eslint-disable-next-line no-unused-vars
function findDuplicates(arr1, arr2) {
	let duplicates = [];

	for (let num of arr1) {
		if (binarySearch(arr2, num) !== -1) {
			duplicates.push(num);
		}
	}

	return duplicates;
}

function binarySearch(arr, num) {
	let start = 0;
	let end = arr.length - 1;

	while (start <= end) {
		let mid = start + Math.floor((end - start) / 2);

		if (arr[mid] < num) {
			start = mid + 1;
		} else if (arr[mid] === num) {
			return mid;
		} else {
			end = mid - 1;
		}
	}

	return -1;
}
