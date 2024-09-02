/* eslint-disable no-unused-vars */
/* 
  -- INSTRUCTIONS --
  You are given the heads of two sorted linked lists list1 and list2.
  Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists
  Return the head of the merged linked list.
*/

/* SOLUTION */
/**
 * Definition for singly-linked list. */
function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function (list1, list2) {
	let mergedList = new ListNode();
	let current = mergedList;

	// Traverse boths lists until the end of one is reached.
	while (list1 !== null && list2 !== null) {
		// Compare the element from list1 to list2.
		if (list1.val <= list2.val) {
			// If list1 element is smaller, add it to merged list.
			current.next = list1;
			list1 = list1.next;
		} else {
			// Else add list2 element.
			current.next = list2;
			list2 = list2.next;
		}
		current = current.next;
	}

	// Add any remaining nodes to the merged list.
	if (list1 !== null) {
		current.next = list1;
	} else {
		current.next = list2;
	}

	return mergedList.next;
};
