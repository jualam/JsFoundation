class Vehicle{
    constructor(make,model){
        this.make = make;
        this.model = model;
    }
    start(){
        return `${this.model} is a car from ${this.make}`
    }
}
//Inheritance 
class Car extends Vehicle{
    constructor(make, model, color) {
        super(make, model);  // ✅ Calls the `Vehicle` constructor
        this.color = color;  // ✅ Adds a new property
    }
    drive(){
        return `${this.model} is driving`
    }
}

let myCar=new Vehicle("Tesla","VS2")
console.log(myCar.start())

let myCar2=new Car("Toyota","Camri")
console.log(myCar2.start())
console.log(myCar2.drive())

let myCar3 = new Car("Brazil", "07", "Red");

console.log(myCar3.make);  
console.log(myCar3.model); 
console.log(myCar3.color); 

