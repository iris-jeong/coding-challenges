/* eslint-disable no-unused-vars */
/* 
  -- INSTRUCTIONS --
  We are given a circular array of non-zero integers, nums, where each integer represents the number of steps to be taken either forward or backward from its current index. Positive values indicate forward movement, while negative values imply backward movement. When reaching either end of the array, the traversal wraps around to the opposite end.
  The input array may contain a cycle, which is a sequence of indexes characterized by the following:
  The sequence starts and ends at the same index.
  The length of the sequence is at least two.
  The loop must be in a single direction, forward or backward.
  Note: A cycle in the array does not have to originate at the beginning. It may begin from any point in the array.
  Your task is to determine if nums has a cycle. Return TRUE if there is a cycle. Otherwise return FALSE.

  Constraints:
  1 ≤ nums.length ≤ 10^4
  -5000 ≤ nums[i] ≤ 5000
  nums[i] ≠ 0
*/

/* SOLUTION */
function circularArrayLoop(nums) {
	let size = nums.length;

	// Traverse the nums array.
	for (let i = 0; i < size; i++) {
		// Set the fast and slow pointers and what direction to move in.
		let slow = i;
		let fast = i;
		let isForward = nums[i] > 0;

		// Keep iterating until you do or do not detect a cycle.
		// eslint-disable-next-line no-constant-condition
		while (true) {
			// Move the slow pointer one time.
			// Get the next step's index.
			slow = nextStep(slow, nums[slow], size);
			// Check to see whether it's a cycle.
			if (isNotCycle(nums, isForward, slow)) {
				break;
			}

			// Move the fast pointer two times.
			fast = nextStep(fast, nums[fast], size);
			if (isNotCycle(nums, isForward, fast)) {
				break;
			}

			fast = nextStep(fast, nums[fast], size);
			if (isNotCycle(nums, isForward, fast)) {
				break;
			}

			// If the slow and fast pointers are the same, we found a cycle.
			if (slow === fast) {
				return true;
			}
		}
	}

	return false;
}

function nextStep(pointer, value, size) {
	// Move the pointer 'value' times and take the modulo to ensure a valid index.
	let result = (pointer + value) % size;
	// If the result is negative, add the total length of the array to ensure the index wraps around correctly.
	if (result < 0) {
		result += size;
	}

	// Return the next step's index.
	return result;
}

function isNotCycle(nums, prevDirection, pointer) {
	// Determine the current direction.
	let currDirection = nums[pointer] >= 0;
	// If the prev direction and curr direction don't match or
	// If the index of the new value pointed to is the same as the index of the previous value pointed to, that is, the pointer is forming a self-loop, then the next iteration starts.
	if (
		prevDirection !== currDirection ||
		Math.abs(nums[pointer] % nums.length) === 0
	) {
		return true;
	} else {
		return false;
	}
}
