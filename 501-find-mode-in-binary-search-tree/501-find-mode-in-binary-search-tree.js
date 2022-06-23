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
var findMode = function(root) {
    // same occurences = multiple modes
    const map = {}
    let maxCount = 0
    const result = []
    
    const dfs = function(node) {
        if (node == null) {
            return
        }
        
        if (map[node.val]) {
            map[node.val] ++
        } else {
            map[node.val] = 1
        }
        
        maxCount = Math.max(maxCount, map[node.val])
        
        dfs(node.left)
        dfs(node.right)
    }
    
    dfs(root)
    
    for (const num in map) {
        if (map[num] === maxCount) {
            result.push(num)
        }
    }
    
    return result
};