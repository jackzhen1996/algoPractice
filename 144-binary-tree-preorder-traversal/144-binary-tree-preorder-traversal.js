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
    // const result = []
    // recursive
//     const dfs = function(node) {
//         if (node == null) {
//             return
//         }
        
//         stack.push(node.val)
//         dfs(node.left)
//         dfs(node.right)
//     }
    
//     dfs(root)
    
    // iterative
    const stack = [root]
    const result = []
    while (stack.length > 0) {
        const popped = stack.pop()
        
        if (popped) {
            result.push(popped.val)
            if (popped.right) {
                stack.push(popped.right)
            }
            if (popped.left) {
                stack.push(popped.left)
            }
        }
        
    }
    return result
};