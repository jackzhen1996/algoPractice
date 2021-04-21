/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // edge case: if nums length is 1, just return nums[0]
    if (nums.length === 1) {
        return nums[0];
    }
    
    // keep track of the sum at each iteration and compare to see if the current max is greater than the global max
    let max = nums[0];
    // two loops:
        // outer loop: fixes one index, i
    for (let i = 0; i < nums.length; i++) {
            // inner loop, j,  explores all possible sums for the fixed index, from i to j
        let currentSum = 0;
        for (let j = i; j < nums.length; j++) {
            currentSum += nums[j];
            if (currentSum > max) {
                max = currentSum
            } 
        }
    }
    
    return max
};