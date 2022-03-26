/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

const findWord = function(i,j,word, board, letterIndex) {
    // base case
    if (word.length === letterIndex) {
        return true
    }
    
    // recursive case
        // does current letter match word[0]
        // check all neighbors for next letter 
    if (i < board.length && i >= 0 && j < board[i].length && j >= 0 && word[letterIndex] === board[i][j]) {
        const currentLetter = board[i][j]
        board[i][j] = 0
        const a = findWord(i-1,j, word, board, letterIndex+1)
        const b = findWord(i+1,j, word, board, letterIndex+1)
        const c = findWord(i,j-1, word, board, letterIndex+1)
        const d = findWord(i,j+1, word, board, letterIndex+1)
        
        if (a || b || c || d) {
            return true
        }
        
        board[i][j] = currentLetter
    }
}

var exist = function(board, word) {
    // iterate through board
        // for each letter, find neighbors that matches the first letter 
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === word[0]) {
                if (findWord(i,j, word, board, 0)) {
                    return true
                }
            }
        }
    }
    
    return false 
};