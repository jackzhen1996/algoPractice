/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // at the nth step, there're two ways to reach the nth step, 
    // either go up 1 step from (n-1)th step, or go up 2 steps from (n-2)th step
    
    // Two ways to get to (n-1)th step, go up 1 step from n-2, or go up 2 steps from n-3
    // etc...
    
    // find all possible permutations of [1,2] that adds up to n
    // const arr = [1,2]
    // let count = 0;
    // bottom up approach
    // start with 0th step, exhaust all possible options of getting from 0th step to nth step
    /*
    var inner = function(steps,arr) {
        console.log(steps)
        // base case: if inner n === outer n: increase count and return
        // if inner n > outer n: return 
        // recursive case: go thru the array of options: either 1 or 2
        
        if (steps > n) {
            return;
        }
        if (steps === n) {
            count ++;
            return;
        }
        
        for (let i = 0; i < arr.length; i++) {
            inner(steps+=arr[i], arr);
            steps -= arr[i];
        }
        
    }
    inner(0,arr);
    return count;
    */
    
    const dp = [];
    
    // 1 ways to get to 0th step: dont climb it
    dp[0] = 1;
    // 1 way to get 1st step: climb 1 step
    dp[1] = 1;
    
    // for the rest of the steps, the number of ways to get to each step is the sum of climbing 2 steps and climbing 1 step
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
};