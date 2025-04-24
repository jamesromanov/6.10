"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function Log(constructor) {
    console.log("Logger is working");
    console.log(constructor);
}
let UserNams = class UserNams {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
};
UserNams = __decorate([
    Log,
    __metadata("design:paramtypes", [String, String])
], UserNams);
let user = new UserNams("someone", "somebody@gmail.com");
console.log(user);
