function Log(constructor: Function) {
  console.log("Logger is working");
  console.log(constructor);
}

@Log
class UserNams {
  constructor(
    public name: string,
    public email: string
  ) {}
}

let user = new UserNams("someone", "somebody@gmail.com");

console.log(user);
