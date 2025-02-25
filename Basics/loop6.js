teas=["Green tea","black Tea","chai","ollong tea"]
let selectedTeas=[];
for(let i=0;i<teas.length;i++){
    if (teas[i]==="chai"){
        break;
    }
    selectedTeas.push(teas[i]);
}
console.log(selectedTeas)