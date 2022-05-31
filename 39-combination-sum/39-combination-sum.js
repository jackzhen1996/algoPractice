/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = []
    const currCandidates = []
    const dfs = function(i, sum) {
        if (i > candidates.length - 1 || sum > target) {
            return     
        }
        if (target === sum) {
            result.push([...currCandidates])
            return
        }
        
        // add up the sum and pass sum and index
        for (let j = i; j < candidates.length; j++) {
            currCandidates.push(candidates[j])
            dfs(j, sum + candidates[j])
            currCandidates.pop()
        }

    }
    
    dfs(0, 0)
    return result
};