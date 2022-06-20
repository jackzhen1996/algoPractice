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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    const stack = []
    // recursive
    const dfs = function(node) {
        if (node == null) {
            return
        }
        
        stack.push(node.val)
        dfs(node.left)
        dfs(node.right)
    }
    
    dfs(root)
    return stack
};