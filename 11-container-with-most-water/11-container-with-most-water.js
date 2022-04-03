/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // length = diff between 2 indices
    // area = length x height
    // height = min(height[i], heigh[j])
    
    // start at the two ends
    // two pointers: beg,end
    
    // whichever side is smaller, move pointer
    // if same, move both
    
    let maxArea = 0
    let l = 0
    let r = height.length - 1
    
    // O(n)
    while (l < r) {
        let currentArea = Math.min(height[l],height[r]) * (r - l)
        maxArea = Math.max(maxArea, currentArea)
        
        if (height[l] < height[r]) {
            l ++
        } else if (height[l] > height[r]) {
            r --
        } else {
            l ++
            r --
        }
    }
    
    return maxArea
};