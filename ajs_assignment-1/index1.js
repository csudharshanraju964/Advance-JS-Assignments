class Airplane{
    constructor(name){
        this.name = name;
        this.isFlying = false;
    }
}
Airplane.prototype.takeOff=function(){
    this.isFlying = true;
    return this.isFlying;
}
Airplane.prototype.land=function(){
    this.isFlying = false;
    return this.isFlying;
}

let airplane1 = new Airplane("AirIndia");
console.log(airplane1.takeOff());
console.log(airplane1.land());