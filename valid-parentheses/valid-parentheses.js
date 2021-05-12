/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // edge case: if s is odd, not valid: return false
    
    // use a stack to keep track of order of opening brackets
    // ([)]: stack = [(, [ ] m, either more openings, or immediately closing ]
    // if the bracket is a opening, add to stack
    // if the bracket is closing, check if it matches the last item on stack
        // if it does, pop off the stack and continue iterating
        // if it doesnt, return false
    // at the end, the stack should be empty, so it is all closed
        // return true
    
    const stack = [];
    const closings = {
        '}': '{',
        ']' : '[',
        ')': '('
    }
    for (let i = 0; i < s.length; i++) {
        if (closings[s[i]]) {
            if (stack[stack.length-1] === closings[s[i]]) {
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(s[i]);
        }
    }
    
    return stack.length === 0;
};