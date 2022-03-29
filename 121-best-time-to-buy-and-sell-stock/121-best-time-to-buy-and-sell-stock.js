/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // trivial case
    if (prices.length === 1) {
        return 0
    }
    
    // iterate through the prices
    // keep track of the max profit = 0
    
    // 7, no number higher than
    // 1, 5 => 4
    // 1, 3 => 2 dont take this
    // 1, 6 => 5 take this 
    
    // brute force
    // two loops
    // let maxProfit = 0
    // for (let i = 0; i < prices.length -1 ; i++) {
    //     for (let j = i + 1; j < prices.length; j++) {
    //         maxProfit = Math.max(prices[j] - prices[i], maxProfit)
    //     }
    // }
    
    // keep track of minimum price as we iterate
    // keep track of max profix as we iterate
    
    let maxProfit = 0
    let min = prices[0]
    
    for (let i = 1; i < prices.length; i++) {
        maxProfit = Math.max(maxProfit, prices[i] - min)
        min = Math.min(min, prices[i])
    }
    
    return maxProfit
    
};