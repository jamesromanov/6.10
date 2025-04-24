const genericFunction = function <T>(a: T): T {
  return a;
};
console.log(genericFunction("returnString"));
console.log(genericFunction(true));
console.log(genericFunction(1));
