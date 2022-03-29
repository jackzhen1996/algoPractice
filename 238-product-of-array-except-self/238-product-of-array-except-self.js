/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // brute force
    // outer loop: anchor on a number, i
        // inner loop: iterate through other numbers, skip the ith number
    
    const answer = []
    for (let i = 0; i < nums.length; i++) {
        let product = 1
        for (let j = 0; j < nums.length; j++) {
            if (j !== i) {
                product *= nums[j]
            }
        }
        answer.push(product)
    }
    
    return answer
};