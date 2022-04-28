/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // iterate thru prices, 
        // reset min to current number, so no longer use min from prev
        // each time i sell, add diff if diff > 0
    
    let max = 0
    let min = prices[0]
    
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] - min > 0) {
            max += prices[i] - min
        } 
        
        min = prices[i]
    }
    
    return max
};