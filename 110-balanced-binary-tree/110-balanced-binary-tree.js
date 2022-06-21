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

var isBalanced = function(root) {
    // get the max depth for each subtree, and find the difference
    // if diff > 1: set a flag to false
    let found = true
    const dfs = function(node) {
        if (node == null) {
            return 0
        }

        const left = dfs(node.left)
        const right = dfs(node.right)

        if (Math.abs(left-right) > 1) {
            found = false
        }

        return 1 + Math.max(left,right)
    }
    
    dfs(root)
    return found
};