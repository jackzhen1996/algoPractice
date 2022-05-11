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
var removeNthFromEnd = function(head, n) {
    // two passes
    // 1. find length 
    // 2. count from 1 to length - n, 
        // point current node to current.next.next
    let node = head
    let len = 0

    
    while (node) {
        len ++
        node = node.next
    }
    
    if (len <= 1) {
        return null
    }
    
    const lastIndex = len - n - 1
    
    let node2 = head
    if (lastIndex < 0) {
        console.log(node2.next)
        return node2.next
    }
    
    let i = 0
    while (i < lastIndex) {
        i ++
        node2 = node2.next
    }
    
    node2.next = node2.next == null || node2.next.next == null? null: node2.next.next
    return head
    
};