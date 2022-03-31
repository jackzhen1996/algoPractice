/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // the current biggest sum is either the current sum or current sum + nums[i] or just nums[i]
    
    let max = nums[0]
    let currentMax = nums[0]
    
    for (let i = 1; i < nums.length; i++) {
        currentMax = Math.max(nums[i], nums[i] + currentMax)
        max = Math.max(currentMax, max)
    }
    
    return max
};