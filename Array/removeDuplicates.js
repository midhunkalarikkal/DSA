function removeDuplicates(arr){
    return [...new Set(arr)]
}
const arr = [1,2,3,1,4,3,6,7,3,8,6,6]
console.log(removeDuplicates(arr))