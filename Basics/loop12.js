teas=["Green tea","black Tea","Chai","ollong tea"]
let selectedTeas=[];
teas.forEach(function (tea){
    if (tea.toLowerCase()==="chai"){
        return;
    }
    selectedTeas.push(tea)
})
console.log(selectedTeas)