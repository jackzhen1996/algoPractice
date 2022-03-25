/**
 * @param {string} s
 * @return {string}
 */

var isPalindrome = function(left,right,s) {
    let longestPal = ''
    let l = left
    let r = right
    while (l >= 0 && r < s.length && s[l] === s[r]) {
        if (r - l + 1 > longestPal.length) {
            longestPal = s.substring(l,r+1)
        }
        l --
        r ++
    }
    
    return longestPal
};
 
var longestPalindrome = function(s) {   
    let longestPal = ''
    
    // brute force
    // anchor on one letter, use another pointer to go out and search for palindrome
        // check if substring is palindrome 
//     for (let i = Math.floor(s.length/2); i >= 0; i-- ) {
//         for (let j = i; j < s.length; j++) {

//             const substring = s.substring(i, j+1)
//             // check if this part of the substring is already seen
//             const possiblePalindrome = substring.slice(1,substring.length-1)
//             if (possiblePalindrome === longestPal && s[i] === s[j]) {
//                 longestPal = substring
//             } else {
//                 if (isPalindrome(substring)) {
//                     longestPal = longestPal.length < substring.length ? substring: longestPal
//                 }
//             }
//         }
//     }
    
    // for each character, expand left and right to check if it is a palindrome
    // babab
    // b 
    // aba 
    // ssaass
    
    for (let i = 0; i < s.length; i++) {
        const evenLongest = isPalindrome(i,i+1, s)
        const oddLongest = isPalindrome(i,i,s)
        console.log({evenLongest, oddLongest})
        if (evenLongest.length > longestPal.length) {
            longestPal = evenLongest
        }
        
        if (oddLongest.length > longestPal.length) {
            longestPal = oddLongest
        }
    }
    
    return longestPal
};