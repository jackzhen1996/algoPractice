/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if (nums.length === 2) {
        return nums[1] + nums[0] === target? [0,1] : null;
    }
    // brute force
    // iterate the array and find all possible 2 num combinations
    // add up each 2 nums and check if sum up to target
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i,j]
            }
        }
    }
    return [];
};