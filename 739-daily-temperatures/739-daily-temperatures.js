/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    // brute force: O(n^2)
    // double loop to find the one that is bigger than the current, and use a counter 
    
    if (temperatures.length === 1) {
        return 0
    }
    const output = []
    for (let i = 0; i < temperatures.length; i++) {
        let daysAhead = 0
        let found = false
        for (let j = i; j < temperatures.length; j++) {
            if (temperatures[j] > temperatures[i]) {
                output.push(j - i)
                found = true
                break
            }
        }
        
        if (!found) {
            output.push(0)
        }
        
    }
    
    return output
};