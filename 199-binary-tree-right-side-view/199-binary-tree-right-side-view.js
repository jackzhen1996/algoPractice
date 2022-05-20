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

const rightSideView = function(root) {
    if (root == null) {
        return []
    }
    
    const nodes = []
    const q = [root]
    while (q.length > 0) {
        const qLen = q.length
        nodes.push(q[qLen-1].val)
        for (let i = 0; i < qLen; i++) {
            const node = q.shift()
            if (node) {
                if (node.left) {
                    q.push(node.left)
                }
                if (node.right) {
                    q.push(node.right)
                }
            }
        }
    }
    
    return nodes
}

// my dfs solution, very complicated
// const findHeight = function(root){
//     if (root == null) {
//         return 0
//     }    
    
//     return 1 + Math.max(findHeight(root.left),findHeight(root.right)) 
// }

// var rightSideView = function(root) {
//     if (root == null) {
//         return []    
//     }
    
//     const hL = findHeight(root.left)
//     const hR = findHeight(root.right)
//     const rightSideNodes = [root.val]
    
//     const dfs = function(root, isLeft ) {
//         const stack = [root]
//         if (isLeft) {
//             let {height, delta} = isLeft
//            while (stack.length > 0) {
//                 const popped = stack.pop()
//                 console.log({popped, height})
//                 if (height <= delta ) {
//                     rightSideNodes.push(popped.val)
//                 }

//                 if (popped.right) {
//                     stack.push(popped.right)
//                 } else if (popped.left) {
//                     stack.push(popped.left)
//                 }
//                 height -- 
//            }
//         } else {
//             while (stack.length > 0) {
//                 const popped = stack.pop()
//                 rightSideNodes.push(popped.val)

//                 if (popped.right) {
//                     stack.push(popped.right)
//                 } else if (popped.left) {
//                     stack.push(popped.left)
//                 }
//             }
//         }
//     }
//     if (root.right) {
//         dfs(root.right, null)
//     }
    
//     if (hR < hL && root.left) {
//         const deltaH = hL - hR
//         dfs(root.left, {height:hL , delta: deltaH })
//     }
    
//     return rightSideNodes
// };