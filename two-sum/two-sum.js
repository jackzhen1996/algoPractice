/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    
    // brute force method
    // O(n^2)
    
    // if (nums.length === 2) {
    //     return nums[1] + nums[0] === target? [0,1] : null;
    // }
    // brute force
    // iterate the array and find all possible 2 num combinations
    // add up each 2 nums and check if sum up to target
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (nums[i] + nums[j] === target) {
    //             return [i,j]
    //         }
    //     }
    // }
    // return [];
    
    
    // two pointer method
    // Time complexity: O(n)
    // Space complexity: O(n)
    // memorize initial positions: {number: positions[]} maximum two positions for a number
    // sort the array
    // use two pointers, left end and right end
    // if sum > target, its too big, move right pointer one step to left
    // if sum. < target, its too small, move left pointer one step to right
    // if same, that is the answer, return the index
    
    let l = 0;
    let r = nums.length-1;
    
    const pos = {};
    
    for (let i = 0; i < nums.length; i++) {
        if (!pos[nums[i]]) {
            const positions = [];
            positions.push(i);
            pos[nums[i]] = positions;
        } else {
            pos[nums[i]].push(i);
        }
    }
    
    nums.sort((a,b)=>a-b);
    
    while (l !== r) {
        const sum = nums[l] + nums[r];
        if (sum > target) {
            r --;
        } else if (sum < target) {
            l ++;
        }
        else {
            console.log(pos)
            if (nums[l] === nums[r]) {
                return pos[nums[l]];
            }
            console.log(nums[l],nums[r])
            return [pos[nums[l]][0], pos[nums[r]][0]];
        }
    }
    
    return [];
    
};