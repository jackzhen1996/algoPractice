/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // trivial case
    // if s length is not even then that means brackets dont match
    
    // stack
    // each time we see an open bracket, we add the bracket to the stack
        // stack solves ordering part
    
    // {{()}}
    
    // {} ({})
    // use hashmap to match closing with opening
    // {closing: opening}
    
    // if opening matches, pop off the stack
        // if not then it means mismatch
    
    if (s.length % 2 !== 0 ) {
        return false
    }
    
    const hashMap = {
        '}': '{',
        ']':'[',
        ')': '('
    }
    const stack = []
    for (let i = 0; i < s.length; i++) {
        if (hashMap[s[i]]) {
            if (hashMap[s[i]] !== stack[stack.length-1]) {
                return false
            }
            stack.pop()
        } else {
            stack.push(s[i])
        }
    }
    
    return stack.length == 0
};