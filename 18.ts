function getTypes(a: string | number): string | number {
  if (typeof a === "number") return a ** 2;
  else return a.toUpperCase();
}
console.log(getTypes(2));
console.log(getTypes("hello world!"));

class SomClass {
  constructor(
    public name: string,
    public age: number
  ) {
    this.name = name;
    this.age = age;
  }
}

let someObject = new SomClass("james", 2);

function checkInstance(ins: object, Class: any): boolean {
  return ins instanceof Class;
}

console.log(checkInstance(someObject, SomClass));
