let teaflavors=["green tea","black tea","oolong tea"]
let firstTea=teaflavors[0]
// console.log(firstTea) 

let citiesVisited=["Mumbai","Sydney"]
citiesVisited.push("Berlin")
// console.log(citiesVisited)

let populerTeas=["green tea","black tea","oolong tea","mango tea"]
let hardcopyTeas=[...populerTeas]
populerTeas.pop()
// console.log(populerTeas)
// console.log(hardcopyTeas)

let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Dhaka"];
let americanCities = ["New York", "Toronto"];
let worldCities = europeanCities.concat(asianCities,americanCities);
// console.log(worldCities);

let cityBucketList=["Tokyo","London","Vancouver","Monkey"]
let isLondonisInList=cityBucketList.includes("London")
console.log(isLondonisInList)

