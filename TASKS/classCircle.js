class Circle {
  constructor(radius = 1.0, color = "red") {
    this.pi = 3.14;
    this.radius = radius;
    this.color = color;
  }

  setRadius(radius) {
    this.radius = radius;
  }

  getRadius() {
    return this.radius;
  }

  setColor(color) {
    this.color = color;
  }

  getColor() {
    return this.color;
  }

  toString() {
    return `Circle[radius=${this.radius}, color=${this.color}]`;
  }

  getArea() {
    return this.pi * this.radius * this.radius;
  }

  getCircumference() {
    return 2 * this.pi * this.radius;
  }
}

let myCircle = new Circle();

const area1 = myCircle.getArea();
const circumference1 = myCircle.getCircumference();

console.log("AREA 1: ", area1);
console.log("CIRCUMFERENCE 1: ", circumference1);

myCircle.setRadius(4);
let updatedRadius = myCircle.getRadius();
console.log("UPDATED RADIUS: ", updatedRadius);
const area2 = myCircle.getArea();
const circumference2 = myCircle.getCircumference();

console.log("AREA 2: ", area2);
console.log("CIRCUMFERENCE 2: ", circumference2);

myCircle.setColor("blue");
let updatedColor = myCircle.getColor();
console.log("UPDATED COLOR:", updatedColor);

let output = myCircle.toString();
console.log("OUTPUT: ", output);
