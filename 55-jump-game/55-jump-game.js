/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // very slow: O(n^n)
//     const dfs = function(i) {
//         if (i > nums.length - 1) {
//             return     
//         }
        
//         if (i === nums.length - 1) {
//             return true
//         }
        
//         for (let j = 1; j <= nums[i]; j++) {
//             if (dfs(i + j)) {
//                 return true
//             }
//         }
        
//         return false
//     }
    
//     return dfs(0)
    
    // move goal post from end to beginning
    let goal = nums.length - 1
    for (let i = goal - 1; i >= 0; i--) {
        if (nums[i] + i >= goal || nums[i] + i >= nums.length - 1) {
            goal = i
        } 
    }
    
    return goal === 0
};