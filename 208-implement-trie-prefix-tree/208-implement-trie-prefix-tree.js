

const Node = function(val) {
    this.val = val ? val : null
    this.children = {}
    this.isWord = false
}

var Trie = function() {
    this.root = new Node(null)
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    // check if the letter exist in the current level of the trie
    // iterate through the word
    // check if letter exist in the children on current level of trie
        // if not, add it, then set the next level to the new node
        // if exist, also set the next level to the node
    
    let node = this.root
    for (let i = 0; i < word.length; i++) {
        if (!node.children[word[i]]) {
            node.children[word[i]] = new Node(word[i])
        }
        node = node.children[word[i]]

    }
    
    node.isWord = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.root
    for (let i = 0; i < word.length; i++) {
        if (!node.children[word[i]]) {
            return false
        }
        node = node.children[word[i]]
    }
    
    return node.isWord
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(word) {
    let node = this.root
    for (let i = 0; i < word.length; i++) {
        if (!node.children[word[i]]) {
            return false
        }
        node = node.children[word[i]]
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