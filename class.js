'use strict'

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    speak() {
        console.log(`${this.name}: hello!`)
    }
}

const ellie = new Person('Ellie', 20)
console.log(ellie.name)
console.log(ellie.age)
ellie.speak()

class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName
        this.age = age
    }

    get age() {
        return this._age
    }

    set age(value) {
        // if (value < 0) {
        //     throw Error('age can not be negative')
        // }
        this._age = value < 0 ? 0 : value
    }
}

const user1 = new User('Steve', 'Job', -1)

class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment()
console.log(experiment.publicField)

class Article {
    static publisher = 'Dream coding'
    constructor(articleNumber) {
        this.articleNumber = articleNumber
    }

    static printPublisher() {
        console.log(Article.publisher)
    }
}

const article1 = new Article(1)
const article2 = new Article(2)
Article.printPublisher()