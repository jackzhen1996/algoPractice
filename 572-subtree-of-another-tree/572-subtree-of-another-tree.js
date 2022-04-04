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

const dfs = function(root, subRoot) {
        if (root == null && subRoot == null) {
            return true
        } else if (root == null || subRoot == null) {
            return false
        } else if (root.val !== subRoot.val) {
            return false
        }
        
        return dfs(root.right,subRoot.right) && dfs(root.left, subRoot.left)
}

var isSubtree = function(root, subRoot) {
    // use bfs to look for the same val as root
    // starting from that subroot, compare with root
        let found = false
        const q = [root]
        let sub = null
        while (q.length > 0) {
            const node = q.shift()
            if (node.val === subRoot.val) {
                found = dfs(node,subRoot)
                if (found) {
                    break
                }
            }

            if (node.right != null) {
                q.push(node.right)
            }

            if (node.left != null) {
                q.push(node.left)
            }
        }
   
    return found
};