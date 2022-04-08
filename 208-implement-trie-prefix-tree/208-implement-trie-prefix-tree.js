
var TrieNode = function(val) {
    this.val = val
    this.children = new Array(26)
    this.isWord = false
}

var Trie = function() {
    this.root = new TrieNode('')
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    // go through the children of the current node
    // if word[0] matches one of the children, go to that child
    // if not, insert word[0] to the children array
        let node = this.root
        for (let i = 0; i < word.length; i++) {
            const letterPosition = word.charCodeAt(i)-97
            if (node.children[letterPosition] == null) {
                node.children[letterPosition] = new TrieNode(word[i])
            }
            node = node.children[letterPosition]
        }
    node.isWord = true
    return this.root
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    // go thru the childre of the current node
    // check if each letter of the word matches the current node's value
        // if match, go to that node
        // if not then it is false
    // if word runs out, check if isWord is true
    
    let node = this.root
    for (let i = 0; i < word.length; i++) {
        const letterPosition = word.charCodeAt(i)-97
        if (node.children[letterPosition] == null) {
            return false
        } 
        node = node.children[letterPosition]
    }
    
    return node.isWord
    
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(word) {
    // iterate through the chldren of a node
    // find the matching letter for the current node
    // if reached end, then return true
    
        let node = this.root
    for (let i = 0; i < word.length; i++) {
        const letterPosition = word.charCodeAt(i)-97
        if (node.children[letterPosition] == null) {
            return false
        } 
        node = node.children[letterPosition]
    }
    
    return true
    
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */