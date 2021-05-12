/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function(s, t) {
    // anagram: every char in t is in s
    // check if every letter in t is in s
    
    // time complexity: O(n), space complexity: O(n + m), where m is length of s, and 
    // n is length t
    // straight forward way: compare the letter counts of
    // both t and s
    if (s.length !== t.length) {
        return false;
    }
    
    // example: 'anagram', 'nagaram'
    // tObj = '{a:3, n:1, g:1, r:1}', sObj = '{a:3, n:1, g:1, r:1}'
    
    // find the count of letters in s
    var sObj = {};
    var tObj = {};
    // find the count of letters in t 
    for (let i = 0; i < s.length; i ++) {
        if (sObj[s[i]]) {
            sObj[s[i]]++
        } else {
            sObj[s[i]] = 1;
        }
        
        if (tObj[t[i]]) {
            tObj[t[i]] ++;
        } else {
            tObj[t[i]] = 1;
        }
    }
    // compare the count
    // by iterating one string and compare counts
    for (let i = 0; i < s.length; i++) {
        if (sObj[s[i]] !== tObj[s[i]]) {
            return false;
        }
    }
    return true;
};