/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const map = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    }
    
    const result = []
    const curr = []
    if (digits.length === 0) {
        return result
    }
    
    const dfs = function(i) {
        if (i > digits.length - 1) {
            result.push([...curr].join(''))
            return
        }
        
        const letters = map[digits[i]]
        for (let j = 0; j < letters.length; j++) {
            curr.push(letters[j])
            dfs(i + 1)
            curr.pop()
        }
    }
    dfs(0)
    return result
};