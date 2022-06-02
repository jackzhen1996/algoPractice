/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    // or just save current letter..
    const dfs = function (row,col,index) {
        if (row > board.length -1 || col > board[0].length - 1 || row < 0 || col < 0 || word[index] !== board[row][col]) {
            return 
        }
        
        if (index === word.length - 1) {
            return true
        }
    
        
        const currentLetter = board[row][col]
        board[row][col] = null

        const right = dfs(row + 1, col, index + 1)
        const left = dfs(row - 1, col, index + 1)
        const down = dfs(row, col + 1, index + 1)
        const up = dfs(row, col - 1, index + 1)
        
        if (right || left || down || up) {
            return true
        }
        
        board[row][col] = currentLetter
        
    }
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === word[0]) {
                const result = dfs(i,j,0)
                if (result) {
                    return true
                }
            }
        }
    }
    
    return false
};