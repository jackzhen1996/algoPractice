/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let maxArea = 0
    let currArea = 0
    const dfs = function(row,col) {
        if (row > grid.length - 1 || row < 0 || col > grid[0].length - 1 || col < 0 || grid[row][col] === 0) {
            return
        }
        
        currArea ++
        grid[row][col] = 0
        dfs(row + 1, col)
        dfs(row - 1, col)
        dfs(row, col + 1)
        dfs(row, col - 1)
    }
    
    for(let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                dfs(i,j)
                maxArea = Math.max(maxArea, currArea)
                currArea = 0 
            }
        }
    }
    
    return maxArea
};