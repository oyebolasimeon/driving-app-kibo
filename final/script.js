('use strict')

const Car = function (brand, speed) {
  this.brand = brand;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.brand} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.brand} is going at ${this.speed} km/h`);
};

const toyota = new Car('Toyota', 120);
const benz = new Car('Benz', 95);

toyota.accelerate();
toyota.accelerate();
toyota.brake();
toyota.accelerate();
benz.accelerate();
benz.accelerate();
benz.accelerate();
benz.brake();