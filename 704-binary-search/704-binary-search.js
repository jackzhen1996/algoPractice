/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // left and right pointers starting at the two ends
    // find the middle element, see if that's the target
        // if not, reduce the search to half,
            // move left or right pointer, if target > middle, that means target is in the right side
            // if target < middle, that means target is in left side
    
    let l = 0
    let r = nums.length-1
    
    while (l <= r) {
        let mid = Math.floor((r+l)/2)
        if (target === nums[mid]) {
            return mid
        }
        if (target > nums[mid]) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    
    return -1
};