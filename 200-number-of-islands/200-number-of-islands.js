/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    // return true if 1
    
    // at least one of the neighbor has to be a 1
        // left, right, up, down
        
    // return if 0
    
    // if seen 1, mark it as seen
    
    // increment by 1
    
    const dfs = function(row, col) {
        if (row > grid.length - 1 || col > grid[0].length - 1 || row < 0 || col < 0 || grid[row][col] === '0') {
            return
        }
        
        grid[row][col] = '0'
        
        dfs(row + 1, col)
        dfs(row - 1, col)
        dfs(row, col + 1)
        dfs(row, col - 1)
        
        
    }
    
    let numIslands = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                numIslands++
                dfs(i,j)
            }
        }
    }
    
    return numIslands
    
};