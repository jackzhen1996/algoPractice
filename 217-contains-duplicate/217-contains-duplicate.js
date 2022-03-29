/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // use hashset to see if nums[i] already exist
    
    const hashset = new Set()
    
    for (const num of nums) {
        if (hashset.has(num)) {
            return true
        } 
        hashset.add(num)
    }
    
    return false
};