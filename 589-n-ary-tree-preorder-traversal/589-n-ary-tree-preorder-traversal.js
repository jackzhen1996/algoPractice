/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    const result = []
//     const dfs = function(node) {
//         if (node == null) {
//             return
//         }
        
        
//         result.push(node.val)
//         for (const child of node.children) {
//             dfs(child)
//         }
//     }
    
//     dfs(root)
    
    const stack = [root]
    while (stack.length > 0) {
        const popped = stack.pop()
        
        if (popped) {
            result.push(popped.val)

            // iterate over children and add to stack
            for (let i = popped.children.length - 1; i >= 0; i--) {
                stack.push(popped.children[i])
            }
        }
    }
    return result
};