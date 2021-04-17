/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    // two pointer method: left pointer: start at beginning, right pointer: start at end
    // if the current sum > target: shift right pointer left by one step
    // if the current sum < target: shift left pointer right by one step
    // if the current sum === target: return the right pointer index and left pointer index [l,r]
    
    // if two pointers are at the same index: there's no solution: return []
    
    
    let l = 0;
    let r = numbers.length-1;
    
    while (l !== r) {
        const sum = numbers[l] + numbers[r]; 
        if (sum > target) {
            r --;
        } else if (sum < target) {
            l ++;
        } else {
            return [l+1,r+1];
        }
    }
    
    return [];
};