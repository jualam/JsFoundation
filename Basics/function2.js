function makeTea(typeofTea){
    return `maketea: ${typeofTea}`;
}
function processTeaOrder(teaFunction){
    return teaFunction("earl grey")
}
let order=processTeaOrder(makeTea)
console.log(order)