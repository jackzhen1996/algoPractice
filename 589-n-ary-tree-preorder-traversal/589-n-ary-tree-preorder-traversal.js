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
    const dfs = function(node) {
        if (node == null) {
            return
        }
        
        
        result.push(node.val)
        for (const child of node.children) {
            dfs(child)
        }
    }
    
    dfs(root)
    return result
};