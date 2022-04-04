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
    
    if (root.left == null && root.right == null) {
        return [[root.val]]
    }
    
    // bfs
    const answer = []
    const queue = [root]
    while (queue.length > 0) {
        // get the first thing from the queue
        const level = []
        let qLength = queue.length
        for (let i = 0; i < qLength; i++) {
            const node = queue.shift()
            
            if (node) {
                level.push(node.val)

                if (node.left) {
                    queue.push(node.left)
                } 

                if (node.right) {
                    queue.push(node.right)
                }
            }
        }
        answer.push(level)
        
    }
    
    return answer
};