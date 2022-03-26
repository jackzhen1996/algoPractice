/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // 0,20,40 list1
    // 1,30,4 list2
    
    // if node1 > node2
        // set node2 as head and tail
        // move node 2 pointer
    // if node 2 > node1
        // set node1 as tail and connect to merge list, set tail as node 1
        // move node1 pointer
    // if same
        // connect both to merged list, set tail as node 1 or node 2
    
    // if either nodes are not null
    // iterate the rest of that list and add to merged list
    
    // merged list
    let node1 = list1
    let node2 = list2
    let dummy = new ListNode()
    let tail = dummy
    
    while (node1 && node2) {
        if (node1.val < node2.val) {
            tail.next = node1
            node1 = node1.next
        } else {
            tail.next = node2
            node2 = node2.next
        }
        tail = tail.next
        
    }
    
    if (node1 != null) {
        tail.next = node1
    }
    
    if (node2 != null) {
        tail.next = node2
    }
    
    return dummy.next
    
};