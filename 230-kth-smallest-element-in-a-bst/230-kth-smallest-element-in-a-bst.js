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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    // recursive way
        // use in order traversal to get the tree nodes in a ordered list
        // and return arr[k - 1]
    
    // time: O(n), n = number of nodes in tree
    // space: O(n), n = number of nodes in tree
    const nums = []
    const dfs = function(root) {
        if (root == null) {
            return
        }
        
        dfs(root.left)
        nums.push(root.val)
        dfs(root.right)
    }
    
    dfs(root)
    return nums[k-1]
};