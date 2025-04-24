type UserType = {
  name: string;
  age: 1;
  email: string;
  password: string;
};

let obj: Partial<UserType> = { name: "james", password: "someone's password" };
console.log(obj);
