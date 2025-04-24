function Timer(constructor: Function) {
  const original = constructor;
  function construct(construct: any, args: any[]) {
    console.time("Time");
    const result = new construct(...args);
    console.timeEnd("Time");
    return result;
  }
  const newConstructor: any = function (...args: any[]) {
    return construct(original, args);
  };
  newConstructor.prototype = original.prototype;
  return newConstructor;
}

@Timer
class Time {
  constructor() {}
  show(): string {
    return "Function is working!";
  }
}

let newtimerObject = new Time();
console.log(newtimerObject.show());
