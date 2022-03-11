/**
 * @param {number[][]} isConnected
 * @return {number}
 */


var findCircleNum = function(isConnected) {
    // edge case: if one city, return 1 
    if (isConnected.length === 1) {
        return 1
    }
    
    let numProvince = 0
    const visited = new Set()
    
    const dfs = function(row) {
        // visited this city
        visited.add(row)
        // look through the neighbor and find all it's neighbors
        for (let col = 0; col < isConnected.length; col++) {
            if (isConnected[row][col] === 1 && !visited.has(col)) {
                dfs(col)
            }
        }
    }
    
    // use dfs to find all the connection for 1 city 
    for (let i = 0; i < isConnected.length; i ++) {
        if (!visited.has(i)) {
            numProvince ++
            dfs(i)
        }
    }
    
    return numProvince
};