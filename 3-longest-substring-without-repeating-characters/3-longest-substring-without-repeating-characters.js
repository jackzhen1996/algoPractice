/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // left pointer
    // iterate thru s with right pointer
        // as long as there's no repeating char, evaluate maxlength
        // as long there is repeating char, move left pointer until repetitions are removed
    
    let l = 0
    let maxLength = 0
    const set = new Set()
    for (let r = 0; r < s.length; r ++) {
        const substr = s.substring(r,r+1)
        while (set.has(substr)) {
            set.delete(s.substring(l,l+1))
            l ++
        }
        set.add(substr)
        maxLength = Math.max(maxLength, set.size)
    }
    return maxLength
};