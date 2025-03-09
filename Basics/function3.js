function createTeaMaker(name) {
    let score=100
    return function (teaType) {
        return `Making ${teaType} ${name} ${score}`;
    };
}

let teaMaker = createTeaMaker("hitesh");
let result = teaMaker("green tea");
console.log(result); // Output: Making green tea hitesh
a=5
function m(a){
    return a++
}
console.log(m(5))