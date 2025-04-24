interface UserInterface {
  name: string;
  age: number;
  isStudent: boolean;
}

class User implements UserInterface {
  constructor(
    public name: string,
    public age: number,
    public isStudent: boolean
  ) {
    this.name = name;
    this.age = age;
    this.isStudent = isStudent;
  }
}

let user1 = new User("Jessica", 23, true);
let user2 = new User("Benny", 43, false);
let user3 = new User("Anny", 90, false);
let user4 = new User("Anastesia", 12, true);

console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);
