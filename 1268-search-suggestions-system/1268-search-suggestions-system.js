/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */

const findInPrefixTree = function(substring, products) {
    
}

// naive way
// var suggestedProducts = function(products, searchWord) {
//     // each letter from searchWord should run a search function and produce 3 lexigraphically minimal results
    
//     // sort the products by lexigraphical order
//     // ['mobile', 'moneypot', 'monitor', 'mousepad', 'mousetrap', 'zebratrap']    

//     // naive way
//     // m = length of search word
//     // n = length of products
//     // entire algo: O(n^2*m^2)
//     products = products.sort()
    
//     const findResults = function(substring) {
//     // iterate 3 times for 3 products
//         // for each letter in substring
//             // for each letter in products[i]
//         // see if letter in substring matches products[i] letter

//     const results = []
//     let i = 0
//     // overall: O(n*m)
//     // O(n)
//         while (results.length < 3 && i < products.length) {
//             const product = products[i]
//             let found = true
//             // O(m)
//             for (let j = 0; j < substring.length; j++) {
//                 if (substring[j] !== product[j]) {
//                     found = false
//                     break
//                 }
//             }
//             if (found) {
//                 results.push(product)
//             }
//             i++
//         }
    
//     return results
//     }
    
//     const results = []
//     // iterate through all letters in searchWord
//     // for each of substring of searchWord we trigger the search function
//         // add the results to the answer array
//     // O(m)
//     for (let i = 0; i < searchWord.length; i++) {
//         // if we want to more precise, substring() is O(m)
//         // usually this is pretty fast
//         results.push(findResults(searchWord.substring(0,i+1), products))
//     }    

//     return results
// };

const TrieNode = function(val) {
    this.val = val
    this.children = new Array(26)
    this.word = null
}

const Trie = function() {
    this.root = new TrieNode('')
}

Trie.prototype.insert = function(word) {
    // iterate through the current nodes'children
    // find the corresponding index for the first letter of word
        // if the first letter exist in the array
            // then we'll go to that node
        // if not, we'll add that node
    
    let node = this.root
    for (let i = 0; i < word.length; i++) {
        const charPosition = word.charCodeAt(i) - 97   
        if (node.children[charPosition] == null) {
            node.children[charPosition] = new TrieNode(word[i])
        }
        node = node.children[charPosition]
    }
    node.word = word
}

Trie.prototype.startsWith = function(word) {
    const threeProducts = []
    
    let node = this.root
    let noMatch = false
    // traverse to the last node that corresponds to the last letter of word
    for (let i = 0; i < word.length; i++) {
        const charPosition = word.charCodeAt(i) - 97   
        if (node.children[charPosition] == null) {
            return []
        }
        node = node.children[charPosition]
    }
    
    
    // reach the node that has the last letter of word
    // return three possible answers 
    
    const findThreeProducts = function(node) {
        // base case
        // add a word when we know we've reached a complete word
        if (node == null) {
            return     
        }
        
        if (node.word) {
            threeProducts.push(node.word)
        }
        
        // recursive case
        // iterate through the node's chlidren
        for (let i = 0; i < node.children.length; i++) {
            if (threeProducts.length === 3) {
                return
            }
            findThreeProducts(node.children[i])
        }
    }
    
    findThreeProducts(node)
    return threeProducts
}

var suggestedProducts = function(products,searchWord) {
    // insert products into a trie => already yield lexigraphical order
    // iterate through the substrings of searchWords
    // trigger a search for the matching substring in the trie
        // we return only 3 items per run of search
    
    const answer = []
    const prefixTree = new Trie()
    
    for (const product of products) {
        prefixTree.insert(product)
    }
    
    
    for (let i = 0; i < searchWord.length; i++) {
        answer.push(prefixTree.startsWith(searchWord.substring(0, i+1)))
    }
    
    return answer
}