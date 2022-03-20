/**
 * @param {string} s
 * @return {number}
 */

// abcabcbb
// begin starts at 0, end starts at 0
// if we see non repeating, we move end pointer forward
    // a is not repeating, a is current longest
    // ab is not repeating, ab is current longest
    // abc is not repeating, abc is current longest
    // abca is repeating, abc is current longest 
        // move beginning pointer to after the very latest repeating letter is at, move end pointer to same place


var lengthOfLongestSubstring = function(s) {
    // iterate s
    // keep track of current longest
        // replace the current longest if we see another longest
    
    // return the longest at the end
    
    let longest = 0
    let start = 0
    let end = 0
    let uniqueLetters = new Set()
    
    while (start <= s.length-1 && end <= s.length - 1) {
        let currentLongest = s.substring(start,end+1)
        const lastLetter = currentLongest[currentLongest.length-1]
        if (uniqueLetters.has(lastLetter)) {
            // move start and end pointer
            // renew set because we're going to evaluate a different substring
            uniqueLetters = new Set()
            start ++ 
            end = start 
        } else {
            // move end pointer
            uniqueLetters.add(lastLetter)
            longest = Math.max(longest, currentLongest.length)
            end ++
        }
    }
    
    return longest
};