class Calculator{
    static add(a,b){
        return a+b;
    }
}

// let miniCalc=new Calculator(); this is not gonna work,can't call a static method on an instance or object
// console.log(miniCalc.add(5,7)); 
console.log(Calculator.add(5,7)); //Static method can only be called using the class name