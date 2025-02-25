let teaCollection=[];
let tea;
do {
    tea=prompt(`"Enter your favorite tea(Type "Stop" to finish)"`);
    if(tea.toLowerCase()!=="stop"){
        teaCollection.push(tea);
    }
    else{
        break;
    }
    
} while (tea.toLowerCase()!=="stop");
console.log(teaCollection)