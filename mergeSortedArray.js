/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// eslint-disable-next-line no-unused-vars
var merge = function (nums1, m, nums2, n) {
	let ptr1 = m - 1;
	let ptr2 = n - 1;
	let end = m + n - 1;

	// Place bigger elements at the end of the array.
	while (ptr1 >= 0 && ptr2 >= 0) {
		if (nums1[ptr1] > nums2[ptr2]) {
			nums1[end] = nums1[ptr1];
			ptr1--;
		} else {
			nums1[end] = nums2[ptr2];
			ptr2--;
		}
		end--;
	}

	// If there are any remaining elements in nums2, copy them over.
	while (ptr2 >= 0) {
		nums1[end] = nums2[ptr2];
		ptr2--;
		end--;
	}
};
