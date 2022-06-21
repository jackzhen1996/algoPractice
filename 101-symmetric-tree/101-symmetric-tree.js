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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    // recursive
//     const dfs = function(p,q) {
//         if (p == null && q == null) {
//             return true
//         }
        
//         if (p == null || q == null || p.val !== q.val) {
//             return false
//         }
        
//         return dfs(p.right,q.left) && dfs(p.left, q.right)
//     }
    
//     return dfs(root.left, root.right)
    
    const s1 = [root.left]
    const s2 = [root.right]
    
    while (s1.length > 0 || s1.length > 0) {
        const left = s1.pop()
        const right = s2.pop()
        
        if (left == null && right == null) {
            continue
        } else if (right == null || left == null || left.val !== right.val) {
            return false
        }
        
        s1.push(left.left)
        s1.push(left.right)
        s2.push(right.right)
        s2.push(right.left)
    }
    
    
    
    return true
};