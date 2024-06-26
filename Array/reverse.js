const arr = [ 1,5,4,"nmae","string",146]
const result = arr.slice().reverse()
console.log("Reversed array :",result)

function reverse(arr){
    let arrReverse = []
    let i = arr.length-1
    while(i >= 0){
        arrReverse.push(arr[i])
        i--
    }
    return arrReverse
}
console.log("Reversed array : ",reverse(arr))