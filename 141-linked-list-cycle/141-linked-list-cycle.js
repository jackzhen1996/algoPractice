/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // save objects in a map or weakmap
    // iterat thru the list, if doesn't exist add to map
    // if exist then return true
    // if loop exists, return false
    
    // time = O(n + 1) = O(n)
    // space = O(n)
//     const set = new WeakSet()
//     let node = head
//     while (node) {
//         if (set.has(node)) {
//             return true
//         } else {
//             set.add(node)
//         }
//         node = node.next
//     }
    
//     return false
    
    if (head == null) {
        return false
    }
    
    let a = head
    let b = head
    while (a && b && a.next && b.next) { 
        a = a.next
        b = b.next.next
        if (a === b) {
            return true
        }
    }
    return false
};