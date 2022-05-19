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

// time: O(n^2), n= num of nodes in the tree
// space : O(1), cuz stack always only have 2 items remaining to process
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
    // 
    while (stack.length > 0) {
        console.log(stack)
        const popped = stack.pop()
        if (popped.val === subRoot.val) {
            // run dfs
            const result = isSameSubTree(popped, subRoot)
            if (result) {
                return true
            }
        }
        
        if (popped.left) {
            stack.push(popped.left)
        }
        
        if (popped.right) {
            stack.push(popped.right)
        }
        
    }
    
    return false
};