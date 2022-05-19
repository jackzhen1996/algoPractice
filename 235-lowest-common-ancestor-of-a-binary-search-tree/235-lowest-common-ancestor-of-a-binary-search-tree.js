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

// time: O(n/2), n = num of nodes in the tree, => O(n)
// space: O(1)
var lowestCommonAncestor = function(root, p, q) {
    // BST means that every left child must be smaller than its parents, and every right child must be bigger than its parents
    
    // if p and q are both less then root, then that means go find LCA on the left subtree
    // if p and q are both greater than root, then go find LCA on right side
    // if p is < root, q > than root or wise-versa, the LCA has to be root
    
    
    if (p.val > root.val && q.val > root.val) {
        // go right
        return lowestCommonAncestor(root.right, p, q)
    } else if (p.val < root.val && q.val < root.val) {
        // go left
        return lowestCommonAncestor(root.left, p, q)
    } else {
        return root
    }
};