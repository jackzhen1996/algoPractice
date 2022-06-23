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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const result = []
    const dfs = function(node, path) {
        if (node == null) {
            return
        }
        
        if (node.left == null && node.right == null) {
            result.push(path +`${node.val}`)
            return 
        }
        
        let currPath = path + `${node.val}->`
        dfs(node.left, currPath)
        dfs(node.right, currPath)        

    }
    dfs(root, '')
    return result
};