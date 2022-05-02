/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    // k = 0, find longest consecutive repeating substring?
    
    // k < 0
    
    const letterToCount = {}
    let maxLen = 1
    let l = 0
    for (let r = 0; r < s.length; r++ ) {
        if (letterToCount[s[r]]) {
            letterToCount[s[r]] ++
        } else {
            letterToCount[s[r]] = 1
        }
        
        while ( (r - l + 1) - Math.max(...Object.values(letterToCount)) > k) {
            letterToCount[s[l]] --
            l ++
        }
        
        maxLen = Math.max(maxLen, r - l + 1)
    }
    
    return maxLen
};