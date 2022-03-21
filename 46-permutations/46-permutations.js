/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function(nums) {
    const answer = []
    
    const tree = function(choices, permutation) {
        // base case
        // if reached length of nums
        if (permutation.length === nums.length) {
            answer.push(permutation)
        }
        
        // recursive case
        // iterate through all possible choices
            // add the choice in choices to permutation
            // exclude itself
            // go down the decision tree
        
        for (let i = 0; i < choices.length; i++) {
            const copyPermutation = [...permutation]
            const copyChoices = [...choices]
            if (copyChoices[i] != null) {
                copyPermutation.push(choices[i])
                copyChoices[i] = null
                tree(copyChoices, copyPermutation)
            }
        }
        
    }
    
    tree(nums, [])
    
    return answer
};