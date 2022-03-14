/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */

const findInPrefixTree = function(substring, products) {
    
}


var suggestedProducts = function(products, searchWord) {
    // each letter from searchWord should run a search function and produce 3 lexigraphically minimal results
    
    // sort the products by lexigraphical order
    // ['mobile', 'moneypot', 'monitor', 'mousepad', 'mousetrap', 'zebratrap']    

    products = products.sort()
    
    const findResults = function(substring) {
    // iterate 3 times for 3 products
        // for each letter in substring
            // for each letter in products[i]
        // see if letter in substring matches products[i] letter

    const results = []
    let i = 0
        while (results.length < 3 && i < products.length) {
            const product = products[i]
            let found = true
            
            for (let j = 0; j < substring.length; j++) {
                if (substring[j] !== product[j]) {
                    found = false
                    break
                }
            }
            if (found) {
                results.push(product)
            }
            i++
        }
    
    return results
    }
    
    const results = []
    // iterate through all letters in searchWord
    // for each of substring of searchWord we trigger the search function
        // add the results to the answer array
    for (let i = 0; i < searchWord.length; i++) {
        results.push(findResults(searchWord.substring(0,i+1), products))
    }    

    return results
};