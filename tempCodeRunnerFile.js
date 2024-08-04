function checkArray(arr,pieces){
    let map = new Map()
    
    for(let piece of pieces){
        map.set(piece[0],piece)
    }

    console.log("map : ",map)

    let i = 0;
    while (i < arr.length) {
        if (map.has(arr[i])) {
            let piece = map.get(arr[i]);
            for (let j = 0; j < piece.length; j++) {
                if (arr[i + j] !== piece[j]) {
                    return false;
                }
            }
            i += piece.length;
        } else {
            return false;
        }
    }

    return true;
}

const arr = [15,88], pieces = [[88],[15]]
console.log(checkArray(arr,pieces))