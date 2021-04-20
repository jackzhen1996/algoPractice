/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // edge case: if prices length is 1, then profit is 0
    if (prices.length === 1) {
        return 0;
    }
    
    // brute force: Time complexity: O(n^2)
    // if prices[j] - prices[i] is > 0, then that is valid profit, 
    // valid profit > 0
    // if the current profit > max profit: then that profit is the max profit
    
    // return max profit
    
    // keep track of the current max profit
    // let maxProfit = 0;
    // two loops iterate the prices, pointers i and j
    // for (let i = 0; i < prices.length - 1; i ++) {
    //     for (let j = i + 1; j < prices.length; j++) {
    //         let currentProfit = (prices[j] - prices[i]) >= 0 ? prices[j] - prices[i] : 0;
    //         if (currentProfit > maxProfit) {
    //             maxProfit = currentProfit;
    //         }
    //     }
    // }
    let profit = 0;
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;
    
    for (const price of prices) {
        if (price < min) {
            min = price;
            max = price;
        }
        
        if (price > max) {
            max = price;
            profit = Math.max(profit, max-min);
        }
    }
    
    return profit;
};