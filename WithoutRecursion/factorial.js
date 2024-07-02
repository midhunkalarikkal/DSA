function factorial(n){
    if(n === 1 || n === 0){
        return 1
    }

    let res = 1;
    for(i = 2; i <= n; i++){
        res *= i
    }
    return res
}

const n = 6
console.log(factorial(n))