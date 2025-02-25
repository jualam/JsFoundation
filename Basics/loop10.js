let cities = {
    'Paris': 100 ,
    'Dhaka':  120 ,
    'NewYork': 60 ,
    'Tokyo': 140 ,
    'Sydney': 50,
}
let newCityPop={}
for (const key in cities) {
    if(key.toLowerCase()==="tokyo"){
        break;
    }
    newCityPop[key]=cities[key]
}
console.log(newCityPop)
    
