interface arrayType {
  [index: number]: string;
}

let arr: Readonly<arrayType> = ["1", "2", "3"];

console.log(arr);
