/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (head == null) {
        return null
    }
    const node = head
    let next = node
    let curr = node
    let prev = null
    while (next.next) {
        next = next.next
        curr.next = prev
        prev = curr
        curr = next
    }
    curr.next = prev
    return curr
};