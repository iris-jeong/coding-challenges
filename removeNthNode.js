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
