/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var binarySearch = function(nums,target) {
    const mid = Math.floor(nums.length/2);
    console.log('mid ' + mid, 'nums ' + nums)
    
    if (nums[0] === target) {
        return nums[0]
    }

    if (nums[mid] === target) {
        return nums[mid];
    } 

    // compare left and right
    // if target > mid look right
    if (target > nums[mid]) {
        return binarySearch(nums.slice(mid+1,nums.length),target);
    }
    // if target < mid look left
    if (target < nums[mid]) {
        return binarySearch(nums.slice(0,mid),target);
    }
};

var search = function(nums, target) {
    
    // edge case: when one number
    if (nums.length === 1) {
        return target === nums[0]? 0: -1;
    }
    
    // find pivot
    // pivot is the max, pivot+1 is the min
    // array left: 0 to pivot, pivot + 1 to end
    // then perform binary search on one of the two arrays
        // if target is > than the first element in the left array
            // search left
        // if target is < than the first element in the left array
            // search right
        // ex. [4,5,6,7,0,1,2], target =2 , 
        // pivot is at 3,
        // left array => [4,5,6,7], right array => [0,1,2]
        // target < left array[0], so search right
    
    const hash = {};
    // turn array into hash
    for (let i = 0; i < nums.length; i++) {
        hash[nums[i]] = i;
    }
    
    console.log(hash)
    
    let pivot;
    for (let i = 0; i < nums.length-1; i++) {
        if (nums[i+1] - nums[i] < 0) {
            pivot = i;
            break;
        }
    }
    
    const left = nums.slice(0,pivot+1); 
    const right = nums.slice(pivot+1, nums.length);
    
    let result = null;

    if (target > left[0]) {
        result = binarySearch(left,target);
    } else {
        if (target === left[0]) {
            return hash[target];
        }
        result = binarySearch(right,target);
    }
    
    console.log('result' + result)
    
    if (result !== undefined) {
        return hash[result];
    }
    
    return -1;
};