let teas=["Green tea","black Tea","Chai","ollong tea","Super duper tea","yoyoyo tea","Funky tea"]
let shortTeas=[]

for (const tea of teas) {
    if(tea.length>10){
        continue;
    }
    shortTeas.push(tea);
    
}
console.log(shortTeas)