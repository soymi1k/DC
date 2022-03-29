const obj1 = {}
const obj2 = new Object()

function print(person) {
    console.log(person.name)
    console.log(person.age)
}

const ellie = { name: 'ellie', age: 4 }

print(ellie)


ellie.hasJob = true
console.log(ellie.hasJob)

delete ellie.hasJob
console.log(ellie.hasJob)



console.log(ellie['name'])

ellie['hasJob'] = true
console.log(ellie.hasJob)

function printValue(obj, key) {
    console.log(obj[key])
}
printValue(ellie, 'name')

const person4 = new Person('ellie', 30)
console.log(person4)
function Person(name, age) {
    this.name = name
    this.age = age
}

console.log('name' in ellie)
console.log('age' in ellie)
console.log('random' in ellie)

console.clear()
for (key in ellie) {
    console.log(key)
}

const array = [1, 2, 3, 4, 5]

for (value of array) {
    console.log(value)
}

const user = { name: 'ellie', age: '20' }
const user2 = user

const user3 = {}
for (key in user) {
    user3[key] = user[key]
}
console.clear()
console.log(user3)

const user4 = Object.assign({}, user)
console.log(user4)
