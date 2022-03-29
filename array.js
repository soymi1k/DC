'use strict'

//1. Declaration

const arr1 = new Array()
const arr2 = [1, 2]

//2. Index position
const fruits = ['🍎', '🍌']
console.log(fruits)

console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
console.log(fruits[fruits.length - 1])

//3. Looping over an array
//print all fruit
// a. for loop
console.clear()
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

// b. for of
for (let fruit of fruits) {
    console.log(fruit)
}

// c. forEach
fruits.forEach((fruit, index, array) => console.log(fruit, index, array))

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('🤮', '🍑')
console.log(fruits)

// pop: remove an item from teh end
fruits.pop()
console.log(fruits)

// unshift: add an item to the beginning
fruits.unshift('⚙︎', '☻')
console.log(fruits)

// shift:remove an item from the be
fruits.shift()
fruits.shift()
console.log(fruits)

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push('⚙︎', '☻')
console.log(fruits)
fruits.splice(1, 3)
console.log(fruits)

// combine two arrays
const fruits2 = [1, 2, 3, 4, 5, 6]
const newFruits = fruits.concat(fruits2)
console.log(newFruits)

// 5. Searching
// indexOf: find the index
console.clear()
console.log(fruits)
console.log(fruits.indexOf('🍎'))
console.log(newFruits.indexOf('🍐'))
// includes
console.log(newFruits.includes('🍐'))

// lastIndexOf
fruits.push('🍎')
console.log(fruits)
console.log(fruits.indexOf('🍎'))
console.log(fruits.lastIndexOf('🍎'))


console.clear()
console.log(newFruits)
const text = newFruits.slice(0, 6)
console.log(text)
console.log(newFruits)
