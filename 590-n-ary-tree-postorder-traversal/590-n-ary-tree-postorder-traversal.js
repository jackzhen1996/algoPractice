/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    const result = []
//     const dfs = function(node) {
//         if (node == null) {
//             return
//         }
        
//         for (const child of node.children) {
//             dfs(child)
//         }
        
//         result.push(node.val)
//     }
    
//     dfs(root)
    const stack = [root]
    while (stack.length > 0) {
        const node = stack.pop()
        if (node) {
            result.push(node.val)
            
            for (let i = 0; i < node.children.length; i++) {
                stack.push(node.children[i])
            }
        }
    }
    return result.reverse()
};