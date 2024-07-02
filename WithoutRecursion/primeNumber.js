function primeNumber(n){
    if(n <= 1){
        return "Not a valid limit"
    }

    
    for(let i = 2; i <= n; i++){
        let flag = 0
        for(let j = 2; j <=  Math.sqrt(i); j++){
            if(i%j === 0){
                flag++
                break
            }
        }
        if(flag === 0){
            console.log(i)
        }
    }
}

const n = 100
primeNumber(n)