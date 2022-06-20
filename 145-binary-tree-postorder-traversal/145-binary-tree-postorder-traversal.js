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
var postorderTraversal = function(root) {
    const result = []
    // recursive
//     const dfs = function(node){
//         if (node == null) {
//             return
//         }
        
//         dfs(node.left)
//         dfs(node.right)
//         result.push(node.val)
//     }
    
//     dfs(root)
    
    
    // iterative
    // do it in preorder then reverse the list
    const stack = [root]
    const stack2 = []
    while (stack.length > 0) {
        const popped = stack.pop()
        
        if (popped) {
            stack2.push(popped.val)
            stack.push(popped.left)
            stack.push(popped.right)
        }
    }
    
    return stack2.reverse()
};