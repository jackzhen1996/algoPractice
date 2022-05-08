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
    // let result = false
    // for (const row of matrix) {
    //     result = search(row, target)
    //     if (result) {
    //         return true
    //     }
    // }
    // return result
    
    // assume the grid is just a 1d array, then the length is m x n
    // example, 3 x 4 = 12,
        // l = 0, r = 11, mid = (l + r) /2
        // 5 => ( row = 5 / m = 5 / 3 = 1 ) , (col = ) => [1,0]
    // my way, didnt work for all cases
//     let rows = matrix.length
//     let cols = matrix[0].length
//     let r = rows * cols - 1
//     let l = 0
//     while (l <= r) {
//         let mid = Math.floor((r + l)/2)
//         const rowIndex = Math.floor(mid/rows)
//         const colIndex = mid - Math.floor(mid/rows)*cols
        
//         let midElement = matrix[rowIndex][colIndex]
//         if (target === midElement) {
//             return true
//         }
        
//         if (target > midElement) {
//             l = mid + 1
//         } else {
//             r = mid - 1
//         }
//     }
//     return false
    
    // look at row bounds
    // find the middle row
        // if target > midRow[-1]: go down
        // if target < midRow[0]: go up
    // go down, shift topPointer to mid + 1
    // go up, shift bottomPointer to mid - 1
    // after binarySearch finishes, perform binary search on that row?
    // time : O (log m + log n) => O (log n)
    
    let top = 0
    let bottom = matrix.length - 1
    let mid = null
    while (top <= bottom) {
        mid = Math.floor((top+bottom)/2)
        const midRow = matrix[mid]

        if (target > midRow[midRow.length-1]) {
            top = mid + 1
        } else if (target < midRow[0]) {
            bottom = mid - 1
        } else {
            break
        }
    }
    
    return search(matrix[mid],target)
    
};