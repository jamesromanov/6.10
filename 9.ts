interface Draw {
  draw(): string;
}

class Circle implements Draw {
  constructor() {}
  draw(): string {
    return `Circle drawn!`;
  }
}
let drawCircle = new Circle();
console.log(drawCircle.draw());
