class Animal {
  constructor(public name: string) {
    this.name = name;
  }
  makeSound(): string {
    return `${this.name} animal does makes sound!`;
  }
}

class Dog extends Animal {
  constructor(public name: string) {
    super(name);
  }
  makeSound(): string {
    return `${this.name} named dog barks!`;
  }
}

let animal = new Dog("Bob");
console.log(animal.makeSound());
