/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   // iterate through the array
    // difference between nums[i] and target, target - nums[i] = other number
        // other number + nums[i] = target
    // turn nums into a hashmap {num: index}
    // 9 -2 = 7, 
    // for each number calculate the difference, and look for the difference in hashmap, get the index
        // return the indices
    
    const numsToIndex = {}
    for (let i = 0; i < nums.length; i++) {
        numsToIndex[nums[i]] = i    
    }
    // {2:0, 7:1, 11:2, 15:3}
    for (let i = 0; i < nums.length; i++) {
        const difference = target - nums[i]
        if (numsToIndex[difference] && i !== numsToIndex[difference]) {
            return [i, numsToIndex[difference]]
        }
    }
    return []
};