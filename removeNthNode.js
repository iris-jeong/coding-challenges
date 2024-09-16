/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* 
  -- INSTRUCTIONS --
  Given a singly linked list, remove the nth node from the end of the list and return its head.
*/

/* SOLUTION */
function removeNthLastNode(head, n) {
	let right = head;
	let left = head;

	for (let i = 0; i < n; i++) {
		right = right.next;
	}

	if (!right) {
		return head.next;
	}

	while (right.next != null) {
		right = right.next;
		left = left.next;
	}

	left.next = left.next.next;

	return head;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
	// Create a dummy node to handle edge cases where the head might be removed.
	let dummy = new ListNode(0, head);
	let slow = dummy;
	let fast = dummy;

	// Move the fast pointer n steps ahead.
	for (let i = 0; i < n; i++) {
		fast = fast.next;
	}

	// Move both fast and slow pointers until fast reaches the end.
	while (fast.next !== null) {
		slow = slow.next;
		fast = fast.next;
	}

	// Slow is now at the node before the one we want to remove.
	slow.next = slow.next.next;

	return dummy.next;
};
