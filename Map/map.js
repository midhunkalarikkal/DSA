let myMap = new Map()
myMap.set('name', 'Midhun')
myMap.set('age', '23')
myMap.set('job', 'SDE')
console.log(myMap)

console.log(myMap.has("name"))

console.log(myMap.get("job"))

myMap.delete("age")
console.log(myMap)
console.log(myMap.size)