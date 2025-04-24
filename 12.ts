const returnEvens = function <T extends number>(arr: T[]): T[] {
  return arr.filter((x) => x % 2 == 0);
};
console.log(returnEvens([1, 2, 3, 4, 5, 6, 7, 8]));
