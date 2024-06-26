//Array declaration
// const arr = new Array()

const person = {
    name : "john",
    age : 25
}
const arr = ["midhun","k","Paniker" , person, 8]

console.log(arr[0])
console.log(arr[3])
console.log(arr[3].age)
console.log(arr[4])

//return the length
const length = arr.push("orange")
console.log("length : ",length)
console.log(arr)

const value = arr.pop()
console.log("value : ",value)
console.log(arr)

const a = arr.shift()
console.log("a : ",a)
console.log(arr)

const b = arr.unshift("Name")
console.log("b : ",b)
console.log(arr)