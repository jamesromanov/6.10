interface AnotherTs {
  name: string;
  email: string;
  password: string;
  isStudent: boolean;
}

type seperateddType = Pick<AnotherTs, "name" | "email">;

let userObject: seperateddType = {
  name: "jamshid",
  email: "someone@gmail.com",
};
console.log(userObject);
