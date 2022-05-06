var evalRPN = function(tokens) {
    if (tokens.length === 1) {
        return tokens[0]
    }
    
    const opHash = {
        '-': (a,b)=> a-b,
        '+': (a,b)=> a+b,
        '*': (a,b)=> a*b,
        '/': (a,b)=> Number.parseInt(a/b)
    }
    
    const stack = []
    
    for (const token of tokens) {
        const func = opHash[token]
        if (func) {
            const num2 = stack.pop()
            const num1 = stack.pop()
            stack.push(func(num1,num2))
        } else {
            stack.push(Number.parseInt(token))
        }
    }
    
    return stack.pop()
};