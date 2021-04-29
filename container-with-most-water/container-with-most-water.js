/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // area = height * width
    // [x,y], height = y, x = i2 - i1, where i2 is > i1, and both i2 and i1 are indexes in the array
    
    // dynamic programming: look for max valid area
    // valid area: height1 >= height2 or height2 >= height1, eq1. area = (index at height2 - index at height1) * min(height2, height1)
    
    // keep track of max
    // max is Number.min
    // use two pointers: fix one pointer, i, iterate the array with another pointer, j, j = i + 1, 
    // if height1 <= height2 or height2 <= height: then area = eq1
        // keep compare to max
    
    // brute force : time complexity: O(n^2)
//     let max = Number.MIN_VALUE;
    
//     for (let i = 0; i < height.length-1; i++) {
//         for (let j = i + 1; j < height.length; j++) {
//             if (height[i] <= height[j] || height[j] <= height[i]) {
//                 const area = Math.abs(j-i) * Math.min(height[i],height[j]);
//                 if (area > max) {
//                     max = area;
//                 }
//             }
//         }
//     }
//     return max;
    
    // two pointer method:
    // if left pointer is smaller than right pointer, move left pointer
    // else move right pointer
    
    let max = Number.MIN_VALUE;
    let left = 0;
    let right = height.length-1;
    let area = 0;
    while (left !== right) {
        area = Math.abs(right-left)* Math.min(height[left],height[right]);
        if (area > max) {
            max = area;
        }
        if (height[left] < height[right]) {
            left ++;
        } else {
            right --;
        }
    }
    
    return max;
    
    
};