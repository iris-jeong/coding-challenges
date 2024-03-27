/* eslint-disable no-unused-vars */
/* 
  -- INSTRUCTIONS --
  Check whether or not a linked list contains a cycle. If a cycle exists, return TRUE, otherwise return FALSE.
  The cycle means that at least one node can be reached again by traversing the 'next' pointer.

  Constraints:
  0 ≤ n ≤ 500
  -10^5 ≤ Node.data ≤ 10^5
*/

/* SOLUTION */
function detectCycle(head) {
	if (!head) {
		return false;
	}

	// Initialize both fast and slow pointers to the head of the linked list.
	let fast = head;
	let slow = head;

	while (fast && fast.next) {
		// Move the slow pointer one node ahead and the fast pointer two nodes ahead.
		slow = slow.next;
		fast = fast.next.next;

		// Check if both pointers point to the same node at any point. If yes, then return TRUE.
		if (slow === fast) {
			return true;
		}
	}

	// Else, if the fast pointer reaches the end of the linked list, return FALSE.
	return false;
}
