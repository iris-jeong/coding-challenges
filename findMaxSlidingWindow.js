/* eslint-disable no-unused-vars */
/* 
  -- INSTRUCTIONS --
  Given an integer list, nums, find the maximum values in all the contiguous subarrays (windows) of size w.
  Note: If the window size is greater than the array size, we consider the entire array as a single window.

  Constraints:
  1 ≤ array.length ≤ 10^3
  -10^4 ≤ array[i] ≤ 10^4
  1 ≤ w
*/

/* SOLUTION */
function findMaxSlidingWindow(nums, w) {
	// If the input array is empty, return an empty array.
	if (nums.length === 0) {
		return [];
	}
	// If the window size is greater than the array, set the window size to the array size.
	if (w > nums.length) {
		w = nums.length;
	}

	let output = new Array(nums.length - w + 1);
	let currentWindow = new Deque();

	// Iterate over the first w elements.
	for (let i = 0; i < w; i++) {
		// For every element, remove the previous smaller elements from the current window.
		cleanUp(i, currentWindow, nums);

		// Append the index of the current element to currentWindow
		currentWindow.push(i);
	}

	// Add the max element of the current window to the output list.
	output[0] = nums[currentWindow.peekFront()];

	// Iterate over the remaining input.
	for (let i = w; i < nums.length; i++) {
		// For every element, remove the previous smaller elements from the current window.
		cleanUp(i, currentWindow, nums);

		// Remove the first index from the current window if it has fallen out of the current window.
		if (currentWindow.length !== 0 && currentWindow.peekFront() <= i - w) {
			currentWindow.shift();
		}

		// Append the index of the current element to the current window.
		currentWindow.push(i);

		// Add the max element of the current window to the output list.
		output[i - w + 1] = nums[currentWindow.peekFront()];
	}

	return output;
}

function cleanUp(i, currentWindow, nums) {
	// Remove all the indices from currentWindow whose corresponding values are smaller than or equal to the current element.
	while (
		currentWindow.length !== 0 &&
		nums[i] >= nums[currentWindow.peekBack()]
	) {
		currentWindow.pop();
	}
}

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

class Deque {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	// Add value to the beginning of the list.
	unshift(value) {
		const newNode = new Node(value);

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head.prev = newNode;
			this.head = newNode;
		}

		this.length++;
	}

	// Add value to the end of the list.
	push(value) {
		const newNode = new Node(value);

		if (!this.tail) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.prev = this.tail;
			this.tail.next = newNode;
			this.tail = newNode;
		}

		this.length++;
	}

	// Remove value from the beginning of the list.
	shift() {
		if (!this.head) {
			return null;
		}

		const removed = this.head;

		if (this.head === this.tail) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = removed.next;
			this.head.prev = null;
		}

		this.length--;

		return removed.value;
	}

	//  remove value from the end of the list
	pop() {
		if (!this.tail) {
			return null;
		}

		const removed = this.tail;

		if (this.head === this.tail) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = removed.prev;
			this.tail.next = null;
		}

		this.length--;

		return removed.value;
	}

	// Get the front value.
	peekFront() {
		return this.head ? this.head.value : null;
	}

	// Get the last value.
	peekBack() {
		return this.tail ? this.tail.value : null;
	}

	// Check if the deque is empty or not.
	isEmpty() {
		return this.length === 0;
	}

	// Helper function to convert the values into a string.
	toString() {
		if (this.head === null) return '[]';

		let result = '[';
		let current = this.head;
		while (current.next !== null) {
			result += current.value + ',';
			current = current.next;
		}
		result += current.value + ']';
		return result;
	}
}
