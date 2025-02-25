let teas=["Green tea","black Tea","Chai","ollong tea","Super duper tea","yoyoyo tea","Funky tea"]
let selectedTeas=[];
for(let i=0;i<teas.length;i++){
    if (teas[i].toLowerCase()==="chai"){
        continue;
    }
    selectedTeas.push(teas[i]);
}
console.log(selectedTeas)