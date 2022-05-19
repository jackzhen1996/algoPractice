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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

const isSameSubTree = function(a,b) {
    if (a == null && b == null) {
        return true
    } else if (a == null || b == null || a.val !== b.val) {
        return false
    } 
    
    return isSameSubTree(a.left,b.left) && isSameSubTree(a.right, b.right)
}

var isSubtree = function(root, subRoot) {
    
    const node = root
    const stack = [root]
    while (stack.length > 0) {
        const popped = stack.pop()
        if (popped.val === subRoot.val) {
            // run dfs
            const result = isSameSubTree(popped, subRoot)
            if (result) {
                return true
            }
        }
        if (popped.right) {
            stack.push(popped.right)
        }
        
        if (popped.left) {
            stack.push(popped.left)
        }
        
    }
    
    return false
};