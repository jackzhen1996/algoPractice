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
var inorderTraversal = function(root) {
    if (root == null) {
        return []
    }
    
    const result = []
    // recursively
//     const dfs = function(node) {
//         // base case
//         if (node == null) {
//             return 
//         }
        
//         dfs(node.left)
//         result.push(node.val)
//         dfs(node.right)
//     }
    
//     dfs(root)
    
    // iterative
    const stack = []
    let node = root
    while(stack.length > 0 || node) {
        if (node) {
            stack.push(node)
            node = node.left
        } else {
            const popped = stack.pop()
            result.push(popped.val)
            node = popped.right
        }
        
    }

    return result
};