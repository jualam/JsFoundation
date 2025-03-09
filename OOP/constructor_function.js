function Person(name,age){
    this.name=name;
    this.age=age;
}
// Creating an instance of Person
let person1 = new Person("John", 30);
console.log(person1.name); // "John"
console.log(person1.age);  // 30


function Car(make,model){
    this.make=make;
    this.model=model;
}
let myCar1=new Car("Toyota","Camry");
let myCar2=new Car("Honda","Civic");
console.log(myCar1)
console.log(myCar2)

//Another one
function Tea(type){
    this.type=type;
    this.describe=function(){
        return `This is a ${this.type} tea`;
    }
}

let tea1=new Tea("Green");
console.log(tea1)
console.log(tea1.describe()); // "This is a Green tea"

//Another example
function Animal(species){
    this.species=species;
}
Animal.prototype.sound=function(){
    return `The ${this.species} makes a sound`;
}
//Creating an instance of Animal
let dog=new Animal("Dog");
console.log(dog.sound()); // "The Dog makes a sound"
let cat=new Animal("Cat");
console.log(cat.sound()); 

//Error handling
function Drink(name){
    if(!new.target){
        throw new Error("Drink must be called with new");
    }
    this.name=name;
}
let tea=new Drink("tea")
//let coffee=Drink("coffee") //this should throw an error for not having NEW
console.log(`My favorite drink is ${tea.name}`) // "tea"
