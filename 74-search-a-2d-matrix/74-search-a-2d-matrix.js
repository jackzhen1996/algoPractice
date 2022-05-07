/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
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
            return true
        }
        if (target > nums[mid]) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    
    return false
};

var searchMatrix = function(matrix, target) {
    // easy way: iterate thru matrix, for each row do binary search
    // yields: O(m log n ), if there are m rows and each row has n items
    let result = false
    for (const row of matrix) {
        result = search(row, target)
        if (result) {
            return true
        }
    }
    return result
    // assume the grid is just a 1d array, then the length is m x n
    // example, 3 x 4 = 12,
        // l = 0, r = 11, mid = (l + r) /2
        // 6 => ( row = 6 / m = 6 / 3 = 2 ) , (col = numRow x n - 6)
};