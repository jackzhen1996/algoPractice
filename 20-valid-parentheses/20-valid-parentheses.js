/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // use a stack to keep track of order of parens
    // if see open, put in stack
    // if see close, top of stack must match open
    // if finish iterating s, there's stil stuff in stack, unclosed ones
        // return false
    const stack = []
    const closeToOpen = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    for (let i = 0; i < s.length; i++) {
        if (closeToOpen[s[i]]) {
            const open = stack.pop()
            if (closeToOpen[s[i]] !== open) {
                return false
            }
        } else {
            stack.push(s[i])
        }
        console.log(stack)
    }
    
    return stack.length === 0
};