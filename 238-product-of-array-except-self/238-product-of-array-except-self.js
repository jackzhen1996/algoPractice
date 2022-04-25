/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  // postfix array: [1, 24, 12, 4]
  // prefix array: [1,1,2,6]
  // iterate from 1 to nums.length
    //  [24,12,8,6 ]
    
    
    const prefix = [1]
    const postfix = []
    postfix[nums.length-1] = 1
    
    let prefixProd = 1
    for (let i = 1; i < nums.length; i++) {
        prefixProd *= nums[i-1]
        prefix.push(prefixProd)
    }
    
    let postfixProd = 1
    for (let i = nums.length-2; i >= 0; i --) {
        postfixProd *= nums[i+1]
        postfix[i] = postfixProd
    }
    
    const answer = []
    for (let i = 0; i < prefix.length; i ++) {
        answer.push(postfix[i]*prefix[i])
    }    
    
    return answer
};