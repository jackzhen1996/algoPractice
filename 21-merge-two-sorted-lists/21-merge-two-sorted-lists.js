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
    // simualtaneously iterate through the two lists
    // if one node's val is > then other node's val
        // pick the smaller node, put in the new list
        // continue the iteration on the list with the smaller node
    // if same pick both, move both pointer
    
    // one of the list iteration will end first, iterate through the rest of nodes
    // in list that hasn't end, and add rest of the nodes to the new list
    
    
    let n1 = list1
    let n2 = list2
    let head = new ListNode()
    let node = head
    
    while (n1 && n2) {
        if (n1.val > n2.val) {
            node.next = n2
            n2 = n2.next
        } else {
            node.next = n1
            n1 = n1.next
        }
        node = node.next
    }
    
    if (n1) {
        node.next = n1
    } 
    
    else if (n2) {
        node.next = n2
    }
    
    return head.next
};