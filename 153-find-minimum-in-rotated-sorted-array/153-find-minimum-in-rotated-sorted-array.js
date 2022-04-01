/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    // corner case: 1 item, return that item
    if (nums.length === 1 || nums[nums.length-1] > nums[0]) {
        return nums[0]
    }
    
    
    // binary search to look for minimum
        // [10,3,4,5,6,7,8,9]
        // middle = 0 + 3 / 2 = 1 => 1 + 0 = 1 => 3
    
        // [5,6,7,8,9,10,1,2]
        // if inflection point => max dips to min
            // return min
        // if no inflection point on left or on right
            // compare current middle to the first element
                // if first > current middle then the min has to be on the left
                // if first < current middle then the min has to be on the right
    
        // [3,2]
    
    let left = 0; 
    let right = nums.length-1;
    
    // O(log n )
    while (left !== right) {
        let middle = left + Math.floor((right- left)/2)
        // look for inflection
            // min on right
        
            // max on right
            // max on left
        
        if (nums[middle] > nums[middle+1]) {
            return nums[middle + 1]
        } 
        if (nums[middle] < nums[middle-1]  ) {
            return nums[middle]
        }
        
        
        // no inflection
        if (nums[0] > nums[middle]) {
            right = middle
        } else {
            left = middle
        }
    }
    
};