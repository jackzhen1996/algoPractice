/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    
    if (root == null) {
        return []    
    }
    
    const result = []
    const q = [root]
    while (q.length > 0) {
        const len = q.length
        
        const level = []
        for (let i = 0; i < len; i++) {
            const node = q.shift()            
            
            if (node) {
                level.push(node.val)
                for (let i = 0; i < node.children.length; i++) {
                    q.push(node.children[i])
                }
            }
        }
        result.push(level)
    }
    
    return result
};