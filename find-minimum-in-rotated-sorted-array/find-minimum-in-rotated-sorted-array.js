/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    // edge case: if nums length is 1, return first element
    if (nums.length === 1) {
        return nums[0];
    }
    
    // if last < first
    if (nums[nums.length-1] < nums[0]) {
        for (let i = 0; i < nums.length-1; i++) {
            if (nums[i] - nums[i+1] > 0) {
                return nums[i+1];
            }
        }
    } 
    return nums[0];
};