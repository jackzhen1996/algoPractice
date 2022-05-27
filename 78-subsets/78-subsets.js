/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const answer = [[]]
    const work = function(choicesLeft, numChoices, currChoices) {
        if (numChoices === 0) {
            console.log(currChoices)
            answer.push([...currChoices])
            return
        }
        
        const curr = currChoices
        for (let i = 0; i < choicesLeft.length; i++) {
            curr.push(choicesLeft[i])
            work(choicesLeft.slice(i+1), numChoices - 1, curr)
            curr.pop()
        }
        
    }
    
    for (let i = 1; i <= nums.length; i++) {
        work(nums, i, [])
    }
    
    return answer
};