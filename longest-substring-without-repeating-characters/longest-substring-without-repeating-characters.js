/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
        // time complexity: 
        // if s length is 0 then just return 0
        if (s.length === 0 ) {
            return 0;
        }
    
        // keep track of max length = smallest number
        let max = Number.MIN_VALUE;
        // iterate the string, fix one pointer, i = 0 => i = s.length-1
        for (let i = 0; i < s.length; i++) {
            const substr = new Set();
        // iterate the string, j = i + 1 => j = s.length
            for (let j = i; j < s.length; j++) {
                // substring (i, j)
                // validate the substring, and make sure that there's no repeated chars
                // if it's a valid substring, then get its length and compare to
                // the max length
                if (!substr.has(s[j])) {
                    substr.add(s[j]);
                    if (max < substr.size) {
                        max = substr.size;
                    }
                } else {
                    // if its invalid, just break
                    break;
                }
            }
        }
    
        // return the max length
        return max;
};