let computer={cpu:12}
let lenovo={screen:"HD",
    __proto__:computer
}
let tomHardware={}
console.log(lenovo.__proto__)

//another way of setting a prototype inside another object
let genericCar={tyres:4}
let tesla={driver:"AI"}
Object.setPrototypeOf(tesla,genericCar)
console.log(Object.getPrototypeOf(tesla))