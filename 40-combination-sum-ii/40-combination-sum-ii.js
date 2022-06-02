/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const result = []
    const currNums = []
    candidates = candidates.sort((a,b)=>a-b)
    const dfs = function(sum,index) {
        if (sum > target) {
            return 
        }     
        
        if (sum === target) {
            result.push([...currNums])
            return
        }
        
        let prev = -1
        for (let i = index; i < candidates.length; i++) {
            if (prev === candidates[i]) {
                continue
            }
            console.log(candidates[i])
            currNums.push(candidates[i])
            dfs(sum+candidates[i], i+1)
            currNums.pop()
            prev = candidates[i]
        }
    }
    
    dfs(0,0)
    return result
};