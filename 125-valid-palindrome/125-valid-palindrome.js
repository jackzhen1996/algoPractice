/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // clean up s => no non-alphanumeric stuff
        // iterate through s and remove stuff
    // check if it is palindrome
        // reverse the string, and compare to s
    const allASCII = '0123456789abcdefghijklmnopqrstuvwxyz'
    const alphaNumeric = new Set(allASCII.split(''))
    
    let cleanedString = ''
    for (let i = 0; i < s.length; i++) {
        if (alphaNumeric.has(s[i].toLowerCase())) {
            cleanedString += s[i].toLowerCase()
        }
    }
    console.log(cleanedString)
    let reversedString = ''
    for (let i = cleanedString.length - 1; i >= 0; i--) {
        reversedString += cleanedString[i]
    }
    
    return reversedString === cleanedString
};