/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    // brute force:
    // sort the array O(nlogn)
    // anchor one element, search elements nums[i] and nums[j] + 1 => O(n^2)
    
    // visual the ranges
    // start of a sequence must not have a left neighbor, aka if 1 is starting, then 0 must not exist
    
    // convert the nums to a set, assuming nums are unique, if not unique then use a hashmap to map num to counts
    // iterate through nums,
        // if left neighbor exist
            // go to next to next one
        // if left neighbor does not exist, we know this is the beginning of sequence
            // look for number that is one greater, keep track of the max length of sequence
    
    const set = new Set(nums) // contains all numbers
    let maxLength = 0
    for (let i = 0; i < nums.length; i++) {
        if (!set.has(nums[i] - 1)) {
            let currentLength = 0   
            while(set.has(nums[i]+currentLength)) {
                currentLength ++
                maxLength = Math.max(currentLength, maxLength)
            }
        }
    }
    
    return maxLength
};