/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if (nums[0] < nums[nums.length -1] || nums.length === 1) {
        return nums[0]
    }
    
    let l = 0
    let r = nums.length - 1
    while ( l <= r) {
        const mid = Math.floor((l+r)/2)
        
        if (nums[mid] > nums[mid+1]) {
            return nums[mid+1]
        } 
        
        if (nums[mid] < nums[mid - 1]) {
            return nums[mid]
        }
        
        // find out if mid is in left or right portion
        if (nums[mid] >= nums[l]) {
            l = mid + 1
        } else if (nums[mid] <= nums[r]) {
            r = mid - 1
        } 
    }
    
};