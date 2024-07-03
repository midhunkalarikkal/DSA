//Array declaration
// const arr = new Array()

const person = {
    name : "john",
    age : 25
}
const arr = [1,2,3,4,5]

console.log(arr[0])
console.log(arr[3])
console.log(arr[3].age)
console.log(arr[4])

const length = arr.push("orange")
console.log("length : ",length)
console.log(arr)

const value = arr.pop()
console.log("value : ",value)
console.log(arr)

const a = arr.shift()
console.log("a : ",a)
console.log(arr)

const b = arr.unshift(100)
console.log("b : ",b)
console.log(arr)

//forEach
arr.forEach(a => console.log(a))

//map
const newarr = arr.map(a => a)
console.log(newarr)

//filter
const filterarr = arr.filter(a => a%2 === 0)
console.log(filterarr)

//concat
const arr1 = [1,2,3,4,5]
const arr2 = [6,7,8,9,10]
const concatarr1 = [...arr1,...arr2]
console.log(concatarr1)
const concatarr2 = arr1.concat(arr2)
console.log(concatarr2)
const concatarr3 = arr1.push(...arr2)
console.log(arr1)

//slice
let samplearr = [1,4,7,3,8,8]
console.log(samplearr)
const newsamplearr = samplearr.slice(2,4)
console.log(newsamplearr)

//splice
let splicearr = [1,6,3,8,3,7,9,38]
console.log(splicearr)
splicearr.splice(2,4,100)
console.log(splicearr)

//sort
let sortarr = [1,4,7,4,5,3,7]
sortarr.sort((a,b) => a-b)
console.log(sortarr)

//reverse
let revarr = [1,2,3,4,5,6]
revarr.reverse()
console.log(revarr)

//flat
let flatarr = [1,2,3,[6,7,8,[4,5,6]]]
const flatarrres = flatarr.flat(Infinity)
console.log(flatarrres)

//some
// The some method tests whether at least one element in the array passes the provided
let somearr = [ 1,2,3,5,7,9]
let somearrres = somearr.some(a => a%2 === 0)
console.log(somearrres)

//every
// The every method tests whether all elements in the array pass the provided function.
let everyarr = [2,4,6,8]
let everyarrres = everyarr.every(a => a%2 === 0)
console.log(everyarrres)

//find
// The find method returns the value of the first element in the array that satisfies the provided function.
let findarr = [1,2,3,4,5,6]
let findarrres = findarr.find(a => a % 5 === 0)
console.log(findarrres)

//indexOf
let indexOfarr = [1,2,3,4,5,6]
let indexOfarrres = indexOfarr.indexOf(3)
console.log(indexOfarrres)

//fill
// fill method is used to fill an array with an element from start to end index.
// fill(0,2,6) -> replacing elements by 0 from 2 nd index to the 6 th index
let fillarr = [1,2,3,4,5,6]
fillarr.fill(0,2,4)
console.log(fillarr)

//reduce
let reducearr1 = [1,2,3,4,5,6]
let sum = reducearr1.reduce((acc,cv,i,arr)=>acc+cv,0)
console.log("Sum is : ",sum)

const people = [
    { name: 'Alice', age: 21 },
    { name: 'Bob', age: 25 },
    { name: 'Alice', age: 23 },
    { name: 'Bob', age: 21 }
  ];

  const groupedByName = people.reduce((acc,cv)=>{
    const key = cv.name
    if(!acc[key]){
        acc[key] = []
    }
    acc[key].push(cv)
    return acc
  },{})

  console.log(groupedByName)