/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    // use two pointers method
    let l = 0
    let r = numbers.length - 1
    
    while (l < r) {
        const sum = numbers[l] + numbers[r]
        if (sum > target) {
            // too big
            r --
        } else if (sum < target) {
            // too small
            l ++
        } else {
            // same
            return [l+1, r+1]
        }
    }
    
    return []
};