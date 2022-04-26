/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    // nums[i] is either beginning of seq or not
        // nums[i-1] does not exist for beginning
    if (nums.length === 0) {
        return 0
    }
    
    
    // put nums in set
    // iterate thru nums
        // if num is beginning, increment max length
        // if not beginning, do nothing
    
    // [100, 4, 200, 1, 3, 2]
    
    // as long as there is a next number, increment the count
    
    const numsSet = new Set(nums)
    let maxLength = 1
    for (const num of nums) {
        if (!numsSet.has(num-1)) {
            let currentLength = 1
            while (numsSet.has(num+currentLength)) {
                currentLength ++ 
                maxLength = Math.max(maxLength, currentLength)
            }
            
        }
    }
    
    return maxLength
};