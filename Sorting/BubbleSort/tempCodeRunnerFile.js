const arr = [8, 5, 4, -8, 44, 82]

function bubbleSortDescending(arr) {
    let swapped
    let n = arr.length
    do {
        swapped = false
        for (let i = 1; i < n; i++) {
            if(arr[i] > arr[i-1]) {
                let temp = arr[i]
                arr[i] = arr[i-1]
                arr[i-1] = temp
                swapped = true
            }
        }
        n--
    } while(swapped)
    return arr
}

console.log(bubbleSortDescending(arr))