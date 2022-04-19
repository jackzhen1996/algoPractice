/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // collect counts for each num, {num: countOfNum}
    // create array where index = counts, nums[index] = [nums that have this count]
    // since array indices are already sorted, return the top k elements
    
    const hash = {}
    for (const num of nums) {
        if (hash[num]) {
            hash[num] ++
        } else {
            hash[num] = 1
        }
    }
    
    const countToNums = []
    for (const num in hash) {
        const numsWithCount = countToNums[hash[num]]
        if (numsWithCount) {
            countToNums[hash[num]].push(num)
        } else {
            countToNums[hash[num]] = [num]
        }
    }
    // [,[3],[2],[1]]
    console.log(countToNums)
    
    const answer = []
    let j = k
    let i = countToNums.length - 1
    while (i > 0 && j > 0) {
        
        if (countToNums[i]) {
        if (countToNums[i].length <= j) {
            answer.push(...countToNums[i])
            j -= countToNums[i].length
        } else {
            const currentBucket = countToNums[i]
            return currentBucket.slice(currentBucket.length - k)
        }
        }
        i--
    }
    
    return answer
};