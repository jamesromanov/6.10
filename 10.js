"use strict";
class Animal {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
    makeSound() {
        return `${this.name} animal does makes sound!`;
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
        this.name = name;
    }
    makeSound() {
        return `${this.name} named dog barks!`;
    }
}
let animal = new Dog("Bob");
console.log(animal.makeSound());
