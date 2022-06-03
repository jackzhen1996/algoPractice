/**
 * @param {string} s
 * @return {string[][]}
 */

const isPal = function(word) {
    let l = 0
    let r = word.length - 1
    while ( l <= r) {
        if (word[l] !== word[r]) {
            return false
        } 
        l ++
        r --
    }
    return true
}
var partition = function(s) {
    const result = []
    const curr = []
    const dfs = function(i) {
        if (i > s.length - 1) {
            result.push([...curr])
            return
        }
        
        for (let j = i; j < s.length; j++) {
            const substr = s.substring(i,j+1)
            if (isPal(substr)) {
                curr.push(substr)
                dfs(j+1)
                curr.pop()
            }
        }
    }
    dfs(0)
    return result
};