let numbers=[1,2,3,4,5,6,7]
let smallNumbers=[]

for (const i of numbers) {
    if(i===4){
        break;
    }
    smallNumbers.push(i);
}
console.log(smallNumbers)