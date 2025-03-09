//This is an object
let car={
    make : "Toyota",
    model: "Camry",
    year: 2015,
    start:function(){
        return `${this.make} car got started in ${this.year}`;
    }
}
console.log(car.start())

//This is a constructor
function Car(make,model){
    this.make=make;
    this.model=model;
}
let myCar1=new Car("Loyota","Camry");
console.log(myCar1)


//Prototypal chain
function Car(make) {
    this.make = make;
}
// Adding a method to the prototype
Car.prototype.start = function() {
    return `${this.make} car is starting...`;
};

const myCar = new Car("Toyota");

console.log(myCar.make);     // ✅ Output: "Toyota"  (Found in myCar)
console.log(myCar.start());  // ✅ Output: "Toyota car is starting..."  (Found in prototype)
console.log(myCar.hasOwnProperty("make"));  // ✅ Output: true
console.log(myCar.hasOwnProperty("start")); // ✅ Output: false (start is in prototype)