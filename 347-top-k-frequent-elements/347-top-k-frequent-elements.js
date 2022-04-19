/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // collect the count of nums for each number in hashmap
    // extra hashmap values, sort them
    // get top k counts from hashmap values
    
    // iterate the hashmap again to find the actual numbers
    
    const hash = {}
    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]]) {
            hash[nums[i]] ++
        } else {
            hash[nums[i]] = 1
        }
    }
    
    const topKCounts = new Set(Object.values(hash).sort((a,b)=>b-a).slice(0,k))
    
    const answer = []
    for (const num in hash) {
        if (topKCounts.has(hash[num])) {
            answer.push(num)
        }
    }
    
    return answer
};