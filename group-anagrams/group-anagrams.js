/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // edge case: strs length is 1, return [strs]
    
    // anagram: every letter appears exactly once and rearranged
    const arr = [];
    const obj = {};
    
    // brute force: 
    // iterate the array: sort each word 
    // put key as the similar words, and
    // value as an array of indexes 'aet': [0,1]
    for (let i =0; i < strs.length; i++)  {
        let sorted = strs[i].split('').sort().join('');
        if (obj[sorted]) {
            obj[sorted].push(i);
        } else {
            obj[sorted] = [i];
        }
    }
    
    // iterate the obj and find all the words that are in each arr of indexes
        // add the words that correspond to each index
    for (const word in obj) {
        const anagram = [];
        for (let i = 0; i < obj[word].length; i++) {
            anagram.push(strs[obj[word][i]])
        }
        arr.push(anagram);
    }
    // return the arr
    return arr;
};