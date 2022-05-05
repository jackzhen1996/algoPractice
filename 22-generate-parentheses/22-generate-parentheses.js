/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    // n means n opens and n closes
        // total of 6 items, re-arrange 6 items such that they are all valid
    
    // brute force: generate all possible permutations => O(n!)
        // then go thru each permutation and validate => O(n) 
    // Overall: O(n*n!)
    
    // n = 1, ()
    // n = 3, ((())) (()()) (())() ()(()) ()()()
    
    const output = []
    const dfs = function(parens, open, close) {
        // base case
        if(close > open)  {
            return
        }
        
        else if (open === n && close === n) {
            output.push(parens)
            return
        }
        
        else if (open === n && close < n) {
            dfs(parens +')', open, close+1)
        } else {
            dfs(parens +'(', open+1, close)
            dfs(parens +')', open, close+1)
        }
        
    }
    
    dfs('(', 1,0)
    return output
};