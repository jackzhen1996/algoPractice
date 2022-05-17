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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    // only add them when at top level root
    // take longest path on left, and take longest path on right, then add them
    let maxDia = Number.MIN_VALUE
    const dfs = function(root) {
        if (root == null) {
            return 0
        }
        
        const leftDia = dfs(root.left)
        const rightDia = dfs(root.right)
        maxDia = Math.max(leftDia + rightDia, maxDia)
        return 1 + Math.max(leftDia,rightDia)
    }
    dfs(root)
    return maxDia
};