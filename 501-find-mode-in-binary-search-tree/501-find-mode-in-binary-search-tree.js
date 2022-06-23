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
//     const map = {}
//     let maxCount = 0
//     const result = []
    
//     const dfs = function(node) {
//         if (node == null) {
//             return
//         }
        
//         if (map[node.val]) {
//             map[node.val] ++
//         } else {
//             map[node.val] = 1
//         }
        
//         maxCount = Math.max(maxCount, map[node.val])
        
//         dfs(node.left)
//         dfs(node.right)
//     }
    
//     dfs(root)
    
//     for (const num in map) {
//         if (map[num] === maxCount) {
//             result.push(num)
//         }
//     }
    
//     return result
    
    
    // no extra space use inorder traversal
    
    // think about getting the mode from a list
    // if current is not the same as prev, count restarts
    // if same, count ++
    
    // if count > max, the new mode is the max, cleaer the modes array because the old mode is smaller
    // add the new mode
    // if count == max, means there's another mode that is the same count as the current mode
    let modes = []
    let prev = null
    let max = 0
    // when encounter first node, count should be 1, since prev is null to begin with
    let count = 1
    
    // 1 2 
    
    const dfs = function(node) {
        if (node == null) {
            return 
        }
        
        dfs(node.left)
        
        if (prev != null) {
            if (prev === node.val) {
                count ++
            } else {
                count = 1
            }
        }
        
        if (count > max) {
            max = count
            modes = []
            modes.push(node.val)
        } else if (count === max) {
            modes.push(node.val)
        }
        
        prev = node.val
        
        dfs(node.right)
    }
    dfs(root)
    return modes
};