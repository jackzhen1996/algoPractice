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
 * @return {number}
 */
var minDepth = function(root) {
    if (root == null) {
        return 0
    }
    
    const minLeft = minDepth(root.left)
    const minRight = minDepth(root.right)
    
    if (minLeft === 0 || minRight === 0) {
        return 1 + Math.max(minLeft, minRight)
    }
    
    return 1 + Math.min(minLeft,minRight)
};