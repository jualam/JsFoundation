let score=102;
let name="juhair";
let isLoggedin=false;

console.log(score);

let getScore=score;
console.log(getScore)

let gameName="Valorant";
gameName="CS-GO";
console.log(gameName);

const userName="juhair Alam" //you can not change const variable later
console.log(userName);

let score2=new Number(100)
console.log(typeof score2)//object

//Undefined
let firstname;
console.log(typeof firstname);

//Null
let lastname=null;
console.log(lastname)

//String
let myString="Hello"
let myname='Juhair'
let greetMessage="How are you doing?"
let a=myString+myname+greetMessage
console.log(a);//no space in between

console.log(`${myString}! My name is ${myname}.${greetMessage} My exam score is ${score}.`)//space in between

let demoOne=`Value is ${4*3}`
console.log(demoOne)

//Symbols
let sym1=Symbol()
let sym2=Symbol()
console.log(sym1)
console.log(sym1==sym2)

//Symbols are always unique even if you name it
let sym3=Symbol("Juhair")
let sym4=Symbol("Juhair")
console.log(sym3)
console.log(sym3==sym4)