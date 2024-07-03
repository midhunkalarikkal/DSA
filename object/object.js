let person = {}
person.name = "Midhun"
person.age = 12
console.log(person)
console.log(person.name)
console.log(person.age)
console.log(person.age)
console.log(person.hasOwnProperty("name"))
console.log("name" in person)
delete person.age
console.log(person)
person.car = "Lamborghini"
person.watch = "RM"
console.log(person)
console.log(Object.keys(person))
console.log(Object.entries(person))
console.log(Object.values(person))
console.log(Object.keys(person).length)