/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    // if p and q are both missing, this is good
    // if p or q are missing, this is bad 
    // if p not equal to q, then this is bad 
    
    if (p == null && q == null) {
        return true
    } 
    
    
    if (p == null || q == null || p.val !== q.val) {
        return false
    }

    
    return isSameTree(q.left, p.left) && isSameTree(q.right, p.right)
    
};