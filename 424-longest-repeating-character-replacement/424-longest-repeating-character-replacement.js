/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    // edge case: k is 0, means return longest repeating for s 
    
    // abaaa => sliding window
    // for current window
        // update hash
        // if window length - most frequent char count <= k, that means we have enough replacements to get the longest repeating substring
            // move j pointer forward
        // if not, move i pointer forward, and delete the count of the letter at i in hash
    
    let i = 0 
    let j = 0
    let max = 0
    let maxOcc = 0
    
    // space: O(26) => O(1)
    const hash = {}
    // letter to counts
    
    // time: O(n) where n is length of s
    while (j <= s.length -1 ) {
        // take in the letter into hash
        hash[s[j]] ? hash[s[j]] ++ : hash[s[j]] = 1
        
        // if we encounter an invalid window size where replacements > max replacements, we shrink the window, and delete char from ith place
        
        maxOcc = Math.max(hash[s[j]], maxOcc )
        
        // time: O(1), because as window length shrinks, the number of replacements should decrease, so replacements should be <= k very quickly, and the window size will never srhink back to size 1 
        while (j - i + 1 - maxOcc > k) {
            hash[s[i]] --
            i ++
            // time: O(2) => O(1)
            maxOcc = Math.max(hash[s[j]], maxOcc )
        }
        
        // re-evaluate max
        max = Math.max(max, j - i + 1 )
        j ++ 
    }
    
    return max
};