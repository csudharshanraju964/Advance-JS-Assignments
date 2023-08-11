
function Airplane(name) {
    this.name = name;
    this.isFlying = false;
  }
  Airplane.prototype.takeOff = function () {
    return `${this.name} is Flying ${(this.isFlying = true)}`;
  };
  Airplane.prototype.land = function () {
    return `${this.name} is Flying ${(this.isFlying = false)}`;
  };
  let airplane1 = new Airplane("Spicejet");
  console.log(airplane1.takeOff());
  console.log(airplane1.land());
