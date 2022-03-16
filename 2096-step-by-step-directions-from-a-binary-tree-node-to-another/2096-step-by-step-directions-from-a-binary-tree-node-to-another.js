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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */

var dfs = function(node, val, directions) {
    // base case
    if (node == null) {
         return null
    }
    
    if (node.val === val) {
        return directions
    }
    
    directions.push('L')
    const resultLeft = dfs(node.left, val, directions)

    if (resultLeft == null) {
        directions.pop()
    } else {
        return resultLeft
    }
    
    directions.push('R')
    const resultRight = dfs(node.right, val, directions)
    
    if (resultRight == null) {
        directions.pop()
    } else {
        return resultRight
    }
    

}

var getDirections = function(root, startValue, destValue) {
    // find starting node directions
    // find ending node directions
    // if starting command are the same, look for more similar commands and delete the same commands
    
    // if starting command is left or right, change to up
    
    // concatenate starting command with ending command
    
    const startingDirections = dfs(root, startValue, [])
    const destDirections = dfs(root, destValue, [])
    console.log({startingDirections,destDirections})
    if (startingDirections[0] === destDirections[0]) {
        // iterate thru both and see any more are the same
        let i = 0
        while (i < startingDirections.length && i < destDirections.length) {
            // if encounter first difference, break the loop
            
            if (startingDirections[i] === destDirections[i]) {
                startingDirections[i] = null
                destDirections[i] = null
            } else {
                break
            }
            i++
        }
    }
    
    for (let i = 0; i < startingDirections.length; i++) {
        const direction = startingDirections[i]
        if (direction === 'L' || direction === 'R') {
            startingDirections[i] = 'U'
        }
    }
    
    let startingString = ''
    let destString = ''
    
    for (const direction of startingDirections) {
        if (direction) {
            startingString += direction
        }
    }
    
    for (const direction of destDirections) {
        if (direction) {
            destString += direction
        }
    }
    
    return startingString + destString
    
};