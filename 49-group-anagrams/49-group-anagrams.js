/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // hashmap: sortedWord: [group of anagrams]
    // iterate thru strs
        // if strs[i] sorted is not in hashmap
            // put strs[i].sort as key, and put [strs[i]] as value
        // if strs[i] sorted
            // push into array
    
    // iterate thru hashmap, return the arrays of anagrams
    
    const sortedWordToAnagrams = {}
    for (const word of strs) {
        const sortedWord = word.split('').sort().join('')
        if (sortedWordToAnagrams[sortedWord]) {
            sortedWordToAnagrams[sortedWord].push(word)
        } else {
            sortedWordToAnagrams[sortedWord] = [word]
        }
    }
    
    return Object.values(sortedWordToAnagrams)
};