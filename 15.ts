namespace MathematicFunction {
  export function add(a: number, b: number): number {
    return a + b;
  }
  export function subtract(a: number, b: number): number {
    return a - b;
  }
}

let result1 = MathematicFunction.add(1, 2);
let result2 = MathematicFunction.subtract(3, 5);

console.log(result1);
console.log(result2);
