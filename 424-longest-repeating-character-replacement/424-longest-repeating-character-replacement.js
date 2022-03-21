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
    
    const hash = {}
    // letter to counts
    
    while (j <= s.length -1 ) {
        // take in the letter into hash
        hash[s[j]] ? hash[s[j]] ++ : hash[s[j]] = 1
        
        // if we encounter an invalid window size where replacements > max replacements, we shrink the window, and delete char from ith place
        maxOcc = Math.max(hash[s[j]], maxOcc )
        while (j - i + 1 - Math.max(...Object.values(hash)) > k) {
            hash[s[i]] --
            i ++
            maxOcc = Math.max(hash[s[j]], maxOcc )
        }
        
        // re-evaluate max
        max = Math.max(max, j - i + 1 )
        j ++ 
    }
    
    return max
};