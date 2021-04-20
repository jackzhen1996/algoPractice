/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // use two loops with pointers i and j, both start at same place:
        // every iteration, fix nums[i]
            // multiply all nums[j] together except for nums[i]
        // add the product to the result array
    
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        let product = 1;
        for (let j = 0; j < nums.length; j++)  {
            if (j !== i) {
                product *= nums[j];
            }
        }
        result.push(product);
    }
    
    return result;
};