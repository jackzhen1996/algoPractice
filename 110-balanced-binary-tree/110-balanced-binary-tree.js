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
    let found = true
    const dfs = function(root){
        if (root == null) {
            return 0
        }
    
        const leftHeight = dfs(root.left)
        const rightHeight = dfs(root.right)
    
        const heightDiff = Math.abs(leftHeight - rightHeight)
        console.log(heightDiff)
        if (heightDiff > 1) {
            found = false
        }
        return 1 + Math.max(leftHeight,rightHeight)
    }
    dfs(root)
    return found
    
};