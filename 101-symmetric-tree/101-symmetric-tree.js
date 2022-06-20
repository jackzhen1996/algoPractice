/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    const dfs = function(p,q) {
        if (p == null && q == null) {
            return true
        }
        
        if (p == null || q == null || p.val !== q.val) {
            return false
        }
        
        return dfs(p.right,q.left) && dfs(p.left, q.right)
    }
    
    return dfs(root.left, root.right)
};