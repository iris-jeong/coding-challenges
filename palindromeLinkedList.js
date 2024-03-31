/* eslint-disable no-unused-vars */
/* 
  -- INSTRUCTIONS --
  Given the head of a linked list, your task is to check whether the linked list is a palindrome or not. 
  Return TRUE if the linked list is a palindrome; otherwise, return FALSE.
  Note: The input linked list prior to the checking process should be identical to the list after the checking process has been completed.

  Constraints:
  Let n be the number of nodes in a linked list.
  1 ≤ n ≤ 500
  0 ≤ Node.value ≤ 9
*/

/* SOLUTION */
function palindrome(head) {
	// Initialize slow and fast pointers to the head of the linked list.
	let slow = head;
	let fast = head;

	// Traverse the linked list until the fast pointer reaches the end.
	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
	}

	// Reverse the second half of the linked list and compare it with the first half.
	let reversedList = reverseLinkedList(slow);

	// Compare the first and second half.
	let isPalindrome = compareHalves(head, reversedList);

	// Re-reverse the second half of the linked list.
	reverseLinkedList(reversedList);

	// Return true if the linked list is a palindrome, else false.
	return isPalindrome;
}

function compareHalves(firstHalf, secondHalf) {
	while (firstHalf !== null && secondHalf !== null) {
		if (firstHalf.data !== secondHalf.data) {
			return false;
		} else {
			firstHalf = firstHalf.next;
			secondHalf = secondHalf.next;
		}
	}

	return true;
}

function reverseLinkedList(slowPtr) {
	let prev = null,
		next = null,
		curr = slowPtr;

	while (curr != null) {
		next = curr.next;
		curr.next = prev;
		prev = curr;
		curr = next;
	}
	return prev;
}
