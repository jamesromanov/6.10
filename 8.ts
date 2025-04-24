class Class {
  #secretMessage = "secret message";
  _protectedField = "password";
  publicField = "canBeSeenFromAnyWhere";
  constructor(public name: string) {}
}

class AnotherClass extends Class {
  constructor(
    public age: number,
    public name: string
  ) {
    super(name);
  }
}
let classExample = new AnotherClass(1, "sophie");
console.log(classExample);
