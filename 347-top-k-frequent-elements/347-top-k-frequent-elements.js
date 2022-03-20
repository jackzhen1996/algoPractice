/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // keep hashmap of number to count
    // at the end sort the numbers by occurences and return k elements
    
    const numToCount = {}
    for (const num of nums) {
        if (numToCount[num]) {
            numToCount[num] ++
        } else {
            numToCount[num] = 1
        }
    }
    
    const numWithCount = []
    for (const num in numToCount) {
        numWithCount.push([num, numToCount[num]])
    }
    
    const sortedNumWithCount = numWithCount.sort((a,b)=>b[1]-a[1])
    const numsOnly = sortedNumWithCount.map(numArr=>numArr[0])
    return numsOnly.slice(0,k)
};