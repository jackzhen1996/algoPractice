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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root == null) {
        return []    
    }
    
    const queue = [root]
    const levels = []
    while (queue.length > 0) {
        const qLength = queue.length 
        const level = []
        for (let i = 0; i < qLength; i++) {
            const popped = queue.shift()   
                if (popped) {
                level.push(popped.val)

                if (popped.left) {
                    queue.push(popped.left)
                } 

                if (popped.right) {
                    queue.push(popped.right)
                }
            }
        }
        levels.push(level)
    }
    return levels
};