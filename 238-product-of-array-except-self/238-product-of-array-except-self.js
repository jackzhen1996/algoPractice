/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // calculate prefix array
    // calculate postfix array
    // multiply prefix with postfix
    
    const prefix = []
    const postfix = new Array(nums.length)
    
   let prefixProd = nums[0]
   prefix[0] = prefixProd
   for (let i = 1; i < nums.length; i++) {
       prefixProd *= nums[i]
       prefix.push(prefixProd)
   } 
    
  let postfixProd = nums[nums.length-1]
  postfix[postfix.length-1] = postfixProd
  for (let i = nums.length-2; i >= 0; i--) {
      postfixProd *= nums[i]
      postfix[i] = postfixProd
  }
    
   // prefix [1,2,6,12]
   // postfix [24,24,12,4]
   // answer [24,12,8,6]
   // iterate through from 0 to nums.length- 1
    // multiply prefix[i-1] * postfix[i+1]
    console.log(prefix, postfix)
    const answer = [postfix[1]]
    for (let i = 1; i < nums.length; i++) {
        if (postfix[i+1] == null) {
            answer.push(prefix[i-1])
        } else {
            answer.push(prefix[i-1]*postfix[i+1])
        }
    }
    
    return answer
  
};