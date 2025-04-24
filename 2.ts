interface functionInterface {
  (a: number, b: number): number;
}

let sumOfTwo: functionInterface = function (a, b) {
  return a + b;
};
let fisrtSum = sumOfTwo(1, 2);
console.log(fisrtSum);
let secondSum = sumOfTwo(0, 2);
console.log(secondSum);
