/* eslint-disable no-unused-vars */
/* 
  -- INSTRUCTIONS --
  Given the head of a singly linked list, return the middle node of the linked list. If the number of nodes in the linked list is even, there will be two middle nodes, so return the second one.

  Constraints:
  Let n be the number of nodes in a linked list.

  Constraints:
  1 ≤ n ≤ 100
  1 ≤ node.data ≤ 100
  head ≠ NULL
*/

/* SOLUTION */
function getMiddleNode(head) {
	// Create two pointers, slow and fast, initially at the head of the linked list.
	let slow = head;
	let fast = head;

	// Traverse the linked list while moving the slow pointer one step forward and the fast pointer two steps forward.
	// When the fast pointer reaches the last node or NULL, the slow pointer will point to the middle node of the linked list.
	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
	}

	// Return the node that the slow pointer points to.
	return slow;
}
