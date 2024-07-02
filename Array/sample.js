const arr = [1,2,3,4,5,6]
console.log(arr)

arr[3] = 11
console.log(arr)

console.log(arr[2])

arr.forEach(a=>console.log(a))

arr.splice(0,0,6)
console.log(arr)

arr.splice(0,3)
console.log(arr)
