let cities = {
    'Paris': 100 ,
    'Dhaka':  120 ,
    'NewYork': 60 ,
    'Tokyo': 140 ,
    'Sydney': 50,
    Karachi: 80 ,
}
let newCityPop={}
for (const key in cities) {
    if(cities[key]<80){
        continue;
    }
    newCityPop[key]=cities[key]
}
console.log(newCityPop)