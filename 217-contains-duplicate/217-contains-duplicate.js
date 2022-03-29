/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // use hashset to see if nums[i] already exist
     
    return (new Set(nums)).size !== nums.length
};