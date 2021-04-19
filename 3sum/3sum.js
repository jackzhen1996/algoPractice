/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// const checkRepetition = (triplet,obj) => {
//     for (const num in triplet) {
//         if (triplet[num] > obj[num]) {
//             return false;
//         }
//     }
//     return true;
// }

var threeSum = function(nums) {
    if (nums.length < 3) {
        return [];
    }
    
//     const arr =[];
//     const obj = {};
    
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             for (let k = j + 1; k < nums.length; k++) {
//                 const triplet = [nums[i],nums[j],nums[k]];
//                 triplet.sort((a,b)=>a-b);
//                 const strSum = triplet.join('');
//                 if (nums[i] + nums[j] + nums[k] === 0 && !obj[strSum]) {
//                     arr.push([nums[i],nums[j],nums[k]]);
//                     obj[strSum] = true;
//                 }
//             }
//         }
//     }
//     return arr;
    
    const arr = [];
   
    
    // sort the array
    // first loop: first pointer fixes a number
        // make sure that the first pointer doesnt repeat, check previous to see if the same
        // second loop: pointers at left end (first pointer + 1) and right end (arr.length-1), if so continue
        // make sure that the second pointer doesnt repeat, check previous to see if the same, if so continue
            // if found a pair of numbers that add up to inverse(first number), meaning opposite sign
                // add the triplet to the result array
    
    nums.sort((a,b)=>a-b);
    
    const cache = {};
    
    for (let i = 0; i < nums.length; i++) {
        let l = i + 1;
        let r = nums.length - 1;
        const inverse = -1*nums[i];
        if (nums[i] !== nums[i-1]) {
            while (l < r) {
                const currentSum = nums[l] + nums[r];
                    if (currentSum > inverse) {
                        r --;
                    } else if (currentSum < inverse) {
                        l ++;
                    } else {
                        let triplet = [];
                        triplet.push([nums[i],nums[l],nums[r]]);
                        triplet.sort((a,b)=>a-b)
                        triplet = triplet.join('');
                        if (!cache[triplet]) {
                            cache[triplet] = true
                            arr.push([nums[i],nums[l],nums[r]]);
                        }
                        l ++;
                    }
            }
        }
    }
    
    return arr;

    
};
    
