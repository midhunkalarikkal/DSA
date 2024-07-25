function quickSort(arr){
    let n = arr.length
    let first = arr[0]
    let mid = Math.floor(n / 2)
    let last = arr[n - 1]

    let pivot = midPivot(first,mid,last)

    if(arr.length <= 1){
        return arr
    }

    let leftarr = []
    let rightarr = []

    for(let i = 0; i < n; i++){
        if(arr[i] == pivot){
            continue
        }

        if(arr[i] < pivot){
            leftarr.push(arr[i])
        }else{
            rightarr.push(arr[i])
        }
    }
    return [...quickSort(leftarr),pivot,...quickSort(rightarr)]
}

function midPivot(a,b,c){
    if((a>b) != (a > c)){
        return a
    }else if((b > a) != b > c){
        return b
    }else{
        return c
    }
}

const arr = [3,6,4,8,2,99,73,-8,75]
console.log(quickSort(arr))