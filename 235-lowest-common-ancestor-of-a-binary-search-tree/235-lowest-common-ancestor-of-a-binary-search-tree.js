/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

// time: O(log n), n = num of nodes in the tree
// space: O(1)
var lowestCommonAncestor = function(root, p, q) {
    if (p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right,p,q)
    } 
    
    if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left,p,q)
    }
    
    if (p.val <= root.val && q.val >= root.val || p.val >= root.val && q.val <= root.val) {
        return root
    }
};