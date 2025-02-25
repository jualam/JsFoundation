let numbers=[1,2,3,4,5,6]
let doublesNumbers=[]
for (let i = 0; i < numbers.length; i++) {
    if(numbers[i]===4){
        continue;
    }
    doublesNumbers.push(numbers[i]*2)
}
console.log(doublesNumbers)
