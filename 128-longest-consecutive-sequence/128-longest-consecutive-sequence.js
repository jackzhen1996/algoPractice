/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    // if there is a sequence, sequence[0] should not have left neighbor
    // so if nums[i] has no left neighbor, we know for sure that this is the start of sequence
        // use set => retrieve left neighbor, nums[i] - 1
    
    // [100,4,200,1,3,2]
    
    const set = new Set(nums)
    let maxLength = 0
    for (let i = 0; i < nums.length; i++) {
        if (!set.has(nums[i]-1)) {
            let currentLength = 0
            while (set.has(nums[i]+currentLength)) {
                currentLength ++
                maxLength = Math.max(currentLength, maxLength)
            }
        }
    }
    return maxLength
};