/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    // edge case: if s is one letter, then return [1]
    if (s.length === 1) {
        return [1]
    }
    
    const mapLetterToFurthestPosition = {}
    
    for (let i = 0; i < s.length; i++) {
        mapLetterToFurthestPosition[s[i]] = i 
    }
    
    
    // general method:
    // for each letter:
        // look for the furthest extent of the current letter
        // set the current furthest as the furthest extent of the chunk
        // iterate through the letters between the current interval, and check if any of 
        // letters have a further extent that is greater than the current furthest extent
            // if there is then that is the furthest extent, then check again until there is none greater
    
        // get the chunk into the array
    
    const partitionLengths = []
    let start = 0
    while ( start <= s.length -1 ) { 
        let furthest = mapLetterToFurthestPosition[s[start]]
        for (let i = start + 1; i < furthest; i++) {
            if (mapLetterToFurthestPosition[s[i]] > furthest) {
                furthest = mapLetterToFurthestPosition[s[i]] 
            } 
        }
        
        partitionLengths.push(s.slice(start, furthest+1).length)
        start = furthest + 1
    }
    
    return partitionLengths
    
};