const arr = [1,2,3,4,5]
console.log("for Loop")
for (let i = 0; i < arr.length; i++){
    console.log("element : ",arr[i])
}

console.log("while Loop")
let i = 0
while(i < arr.length){
    console.log("element : ",arr[i])
    i++
}

console.log("forEach Loop with arrow function")
arr.forEach((element,index)=>{
    console.log("index : ",index , " element : ",element)
})

console.log("forEach Loop without arrow function")
arr.forEach(function(element,index){
    console.log("index : ",index , " element : ",element)
})

console.log("for of Loop")
for(const a of arr){
    console.log("element : ",a)
}