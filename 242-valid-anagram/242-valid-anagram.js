/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // make sure that every letter in t is in s
    
    // easiest way to check is
    if (s.length != t.length) {
        return false
    }
    
    // convert s into hashmap
        // {letter: count}
    
    // convert t into hashmap
        // {letter: count}
    
    // iterate over either hashmap
        // compare counts
    
    const sHash = {}
    const tHash = {}
    
    for (const letter of s) {
        sHash[letter] ? sHash[letter] ++ : sHash[letter] = 1
    }
    
    for (const letter of t) {
        tHash[letter] ? tHash[letter] ++ : tHash[letter] = 1
    }
    
    for (const letter in sHash) {
        if (sHash[letter] != tHash[letter]) {
            return false
        }
    }
    
    return true 
};