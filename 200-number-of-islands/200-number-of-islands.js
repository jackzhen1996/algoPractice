/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {

    // edge case: if m and n are 1, this means we either 0 or 1.
    if (grid.length === 1 && grid[0].length === 1) {
        return grid[0][0]
    }
    
    // recursive method
    // iterate through the 2d array
    
    let numIslands = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                numIslands += findIslands(i,j, grid)
            }
        }
    }
    
    return numIslands
};

const findIslands = function(i,j, grid) {
    
    // base case: 
    // return if current item is either 0 or null/undefined ( use shallow equal check )
    if (i < 0 || i > grid.length - 1 || j < 0 || j > grid[i].length -1  || grid[i][j] === '0') {
        return
    }
    
    // 1. change the current '1' to a '0', to mark it as seen
    // 2. check all cardinal directions
        // 2a. up, down, left, right 
        // call findIslands(i,j) on all immediate neighbors
        // if all directions are checked, meaning all 1s have been turned to 0, return 1
    
    grid[i][j] = '0'
    
    findIslands(i+1,j, grid)
    findIslands(i-1,j, grid)
    findIslands(i,j+1, grid)
    findIslands(i,j-1, grid)
    
    return 1
}