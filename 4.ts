interface UsersInterface {
  readonly id: number;
  name: string;
  age: number;
  email: string;
}

class Users implements UsersInterface {
  constructor(
    public id: number,
    public name: string,
    public age: number,
    public email: string
  ) {
    (this.id = id), (this.name = name), (this.age = age), (this.email = email);
  }
}

let users1 = new Users(1, "james", 23, "someone@gmail.com");
let users2 = new Users(2, "albert", 45, "albertIvan@gmail.com");
let users3 = new Users(3, "nick", 90, "nickthegamer1@gmail.com");

console.log(users1);
console.log(users2);
console.log(users3);
