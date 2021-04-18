/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    // naive approach get the linked list into a string/array
    // check using two pointers
    // linkedlist to array/string: O(n)
    // check with two pointers: O(n)
    
    // edge case: if only one node, return true,
    // if no node, return false;
    
    const arr = [];
    let node = head;
    
    if (!node) {
        return false;
    }
    
    if (!node.next) {
        return true; 
    }
    
    while (node) {
        arr.push(node.val);
        node = node.next;
    }
    
    console.log(arr)
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[arr.length-i-1]) {
            return false;
        }
    }
    return true;
};