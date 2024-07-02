function fibonacci(n){
    if(n <= 1){
        return n
    }
    let res , a = 0 , b = 1;
    for(i = 2; i <= n; i++){
        res = a + b
        a = b
        b = res
    }
    return res
}

const n = 10
console.log(fibonacci(n))

38