"use strict";
var _Class_secretMessage;
class Class {
    constructor(name) {
        this.name = name;
        _Class_secretMessage.set(this, "secret message");
        this._protectedField = "password";
        this.publicField = "canBeSeenFromAnyWhere";
    }
}
_Class_secretMessage = new WeakMap();
class AnotherClass extends Class {
    constructor(age, name) {
        super(name);
        this.age = age;
        this.name = name;
    }
}
let classExample = new AnotherClass(1, "sophie");
console.log(classExample);
