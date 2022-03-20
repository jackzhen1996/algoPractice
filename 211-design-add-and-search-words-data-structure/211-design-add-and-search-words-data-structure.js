const TrieNode = function(val) {
    this.val = val
    this.children = {}
    // letter : Trie() 
    this.word = false
}

const Trie = function() {
    this.root = new TrieNode('')
}

Trie.prototype.addWord = function(newWord) {
    // iterative method
    // iterate through the word, and see if any of the letters exist in the children array
        // locate the letter in array is by using charCode, where charCodeAt(word[i]) - 97 => index in the children array
    // if exist, assign node to that child node
    // if not, then put the current letter to that index
    
    // once we finish adding the word, mark the last node's word property to equal to word
    
    let node = this.root
    for (let i = 0; i < newWord.length; i++) {
        if (node.children[newWord[i]] == null) {
            node.children[newWord[i]] = new TrieNode(newWord[i])
        } 
        node = node.children[newWord[i]]
    }
    
    node.word = true
}

// bad, dad
// [b,d]
Trie.prototype.search = function(word) {
//     // base case
//     // we havent found it yet, we need to go back up a level
//     // we found it, return true
//     const node = this.root
//     const work = function(node, string) {
//         // base case
//         // we will only reach the end of a branch if letters matched
        
//         // this only happens if no dot is present
        
//         if (node.word && string.length === 0) {
//             return true
//         } 
        
//         if (!node.word && string.length > 0) {
//             return false
//         }
        
//         // recursive case
//         // either letter or '.'
//         if (string[0] === '.') {
//             for (const child in node.children) {
//                 const matched = work(node.children[child], string.substring(1,string.length))
//                 if (matched) {
//                     return true
//                 }
//             }
//             return false
//         } else {
//             if (node.children[string[0]]) {
//                 return work(node.children[string[0]], string.substring(1,string.length))
//             } 
//             return false
//         }
//     }
    
    
//     return work(this.root, word)
    
    const dfs = function(node, index) {
        let root = node
        
        for (let i = index; i < word.length; i++) {
            const letter = word[i]
            
            if (letter === '.') {
                // iterate through all children
                for (const child in root.children) {
                    const result = dfs(root.children[child], i + 1)
                    if (result) {
                        return true
                    }
                }
                return false
            } else {
                if (root.children[letter] == null) {
                    return false
                }
                root = root.children[letter]
            }
        }
        
        return root.word
    }
    
    return dfs(this.root, 0)

}


var WordDictionary = function() {
   // use trie to add word and search for word
    this.trie = new Trie()
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    this.trie.addWord(word)
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    return this.trie.search(word)
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */