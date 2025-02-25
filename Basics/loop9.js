teas=["Green tea","black Tea","Chai","ollong tea"]
let selectedTeas=[];
for (const i of teas) {
    if (i.toLowerCase()==="chai"){
        continue;
    }
    selectedTeas.push(i);
}
console.log(selectedTeas)