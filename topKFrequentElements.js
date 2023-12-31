/* 
  -- INSTRUCTIONS --
  Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

  Example 1:
  Input: nums = [1,1,1,2,2,3], k = 2
  Output: [1,2]
  Example 2:
  Input: nums = [1], k = 1
  Output: [1]

  Constraints:
  1 <= nums.length <= 105
  -104 <= nums[i] <= 104
  k is in the range [1, the number of unique elements in the array].
  It is guaranteed that the answer is unique.
*/

/* SOLUTION */
// eslint-disable-next-line no-unused-vars
var topKFrequent = function (nums, k) {
	// Create a map to count frequency of each element, key-val pair of number to frequency
	let map = new Map();
	for (let num of nums) {
		map.set(num, (map.get(num) || 0) + 1);
	}
	// Create return array
	let arr = [];
	// Loop through k times
	for (let i = 0; i < k; i++) {
		let maxVal = -1;
		let maxKey = '';
		// Find the max value in the map
		for (const [key, val] of map) {
			if (val > maxVal) {
				maxVal = val;
				maxKey = key;
			}
		}
		// Add it to return array
		arr.push(maxKey);
		// Delete from map
		map.delete(maxKey);
	}

	return arr;
};
