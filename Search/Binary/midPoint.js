function midPoint(arr){
    let left = 0
    let right = arr.length - 1

    while(left <= right){
        let mid = Math.floor(left + right / 2)
        if(mid == left){
            break
        }
        left = mid
    }
    return left
}

const arr = [1, 5, 8, 10, 12, 15, 20, 25, 30];
console.log(midPoint(arr));