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
 * @return {boolean}
 */
// constraint: range of node values from negative to positive
// edge case: if there's no left and right children in root, return false

const dfs = (root) => {
    // exhaust all nodes
    // if right node exist, go right
    // if left node eixst, go left
    
    const arr = [];
    
    const inner = (node) => {
        
    // base case: 
    // if current node is undefined
        if (!node) {
            return;
        }
        
        arr.push(node.val)
        
    // if no children then return
        if (!node.right && !node.left) {
            return;
        }
    
    // recursive case:
    // check right
    // check left
        inner(node.right);
        inner(node.left);
    }
    inner(root);
    return arr;
}


var findTarget = function(root, k) {
    
    // Approach 1:
    // look at the current root, calculate the second number = target - root.value
        // search the tree for that number
        // 
    
    // Approach 2: 
    // DFs the tree and append the elements to an array, then use two pointer method
    // DFS : O(n)
    // sort array: O(nlogn)
    // Two pointer: O(n)
    // Overall: O(n)
    
    // DFS the tree
        // for each node, push value to arr
    // Two pointer method for the arra and see if two elements add up to target
    const arr = dfs(root);
    arr.sort((a,b)=>a-b)
    let l = 0;
    let r = arr.length-1;
    while (l !== r) {
        const sum = arr[l] + arr[r];
        
        if (sum > k) {
            r --;
        }
        else if (sum < k) {
            l ++;
        }
        else {
            return true;
        }
    }
    
    return false;
    
};