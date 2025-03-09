function Animal() {
}
 
Animal.prototype.speak = function() {
  return 'Animal speaking';
};
 
function Dog() {
}
 
Dog.prototype = Object.create(Animal.prototype);
 
Dog.prototype.bark = function() {
  return 'Woof!';
};
 
Dog.prototype.constructor = Dog;//With Dog.prototype.constructor = Dog;myDog.constructor correctly points to Dog.Without it	myDog.constructor incorrectly points to Animal.

const myDog = new Dog();
console.log(myDog.speak());  // ✅ "Animal speaking" (inherited)
console.log(myDog.bark());   // ✅ "Woof!"
console.log(myDog.constructor);
