'use strict'

class Shape {
    constructor(width, height, color) {
        this.width = width
        this.height = height
        this.color = color
    }

    draw() {
        console.log(`drawing ${this.color} color of`)
    }

    getArea() {
        return this.width * this.height
    }
}
class Rectangle extends Shape { }
class Triangle extends Shape {
    draw() {
        super.draw()
        console.log('🤮')
    }
    getArea() {
        return (this.width * this.height / 2)
        //overiding
    }
}
const rectangle = new Rectangle(20, 20, 'blue')
rectangle.draw()
const triangle = new Triangle(20, 30, 'red')
triangle.draw()
console.log(triangle.getArea())

console.log(rectangle instanceof Rectangle)