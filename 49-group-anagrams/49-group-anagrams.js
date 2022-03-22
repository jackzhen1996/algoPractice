/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // brute force
    // sort each word
    // put in hash, {sorted: [words that are not sorted]}
    
    // if length 1, then just return itself
    const answer = []
    const sortedToWords = {}
    
    for (const word of strs) {
        const sortedWord = word.split('').sort().join()
        
        if (sortedToWords[sortedWord]) {
            sortedToWords[sortedWord].push(word)
        } else {
            sortedToWords[sortedWord] = [word]
        }
    }

    for (const word in sortedToWords) {
        answer.push(sortedToWords[word])
    }
    
    
    return answer
};