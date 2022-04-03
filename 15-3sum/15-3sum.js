/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // no length no iterate
    if (nums.length  === 0) {
        return []
    }
    nums = nums.sort((a,b)=>a-b)

    const triplets = []
    
    // iterate nums
    // if current num is same as prev num
        // continue
    
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i-1]) {
            continue
        }
        
        let l = i + 1
        let r = nums.length-1
        
        while (l < r) {
            sum = nums[l] + nums[r] + nums[i]
            if (sum > 0) {
                // make it smaller
                r --
            } else if (sum < 0) {
                // make it bigger
                l ++
            } else {
                // found answer
                triplets.push([nums[i], nums[l], nums[r]])
                l ++ 
                // make sure left num is not same as prev left num
                while (l < r && nums[l] === nums[l-1]) {
                    l++
                }
            }
        }
    }
    
    return triplets
};