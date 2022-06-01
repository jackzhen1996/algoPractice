/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
     const result = []
     const currPermutation = []
     const currHash = new Set()
     const dfs = function(i) {
         
         if (currPermutation.length === nums.length) {
             result.push([...currPermutation])
             return
         }
         
         for (let j = 0; j < nums.length; j ++) {
             if (!currHash.has(nums[j])) {
                 currPermutation.push(nums[j])
                 currHash.add(nums[j])
                 dfs(j)
                 const popped = currPermutation.pop()
                 currHash.delete(popped)
             }
         }
     }
     
     dfs(0)
    return result
};