/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function(s, indices, sources, targets) {
    // notes
    // whatever substring at indices[i] must equal to substring form sources
    // we dont want to mess up the indexing
        // splitting up the string into indices.length pieces
        // use sources array to determine which part we didn't split
        // join back up substrings together at the end
        
    // abcd
    // a, b ,cd 
    // a => eee
    // b => b
    // cd => ffff
    // answer = eeebfff
    
    // {0: {source: 'a', target: 'eee'}, 2: {source: 'cd', target: 'ffff'}}
    
    // O (k), k is length of indices, sources, target
    const mapIndicesToSources = {}
    for (let i = 0; i < indices.length; i++) {
        mapIndicesToSources[indices[i]] = [sources[i],targets[i]]
    }
    
    const substrings = []
    // O(n), n = s.length
    for (let i = 0; i < s.length; i++) {
        if (mapIndicesToSources[i]) {
            // check if substring in sources == substring here
            // construct the new substring
            const [source, target] = mapIndicesToSources[i]
            const sliceEndIndex = i + source.length
            const slice = s.slice(i, sliceEndIndex)
            if (slice === source) {
                substrings.push(target)
            } else {
                substrings.push(slice)
            }
            i = sliceEndIndex - 1
        } else {
            substrings.push(s[i])
        }
    }
    
    // O(n + k)
    return substrings.join('')
};