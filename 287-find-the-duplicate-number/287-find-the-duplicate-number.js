/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    // sort it then look for nums[i+1] == nums[i]
    
    nums = nums.sort((a,b)=>a-b)
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i+1]) {
            return nums[i]
        }
    }
    
};