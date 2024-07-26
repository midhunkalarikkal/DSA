function balance(expression){
    const stack = []
    for(let char of expression){
        if(char === "{"){
            stack.push(char)
        }else if(char === "}"){
            if(stack.length === 0 || stack.pop() !== "{"){
                return false;
            }
        }
    }
    return stack.length === 0
}

const expression1 = "{ { { } } }";
const expression2 = "{ { } { } } }";
console.log(balance(expression1));
console.log(balance(expression2));