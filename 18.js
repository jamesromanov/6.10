"use strict";
function getTypes(a) {
    if (typeof a === "number")
        return a ** 2;
    else
        return a.toUpperCase();
}
console.log(getTypes(2));
console.log(getTypes("hello world!"));
class SomClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
}
let someObject = new SomClass("james", 2);
function checkInstance(ins, Class) {
    return ins instanceof Class;
}
console.log(checkInstance(someObject, SomClass));
