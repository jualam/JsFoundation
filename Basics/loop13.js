let cities = ["New York", "Tokyo", "Paris", "Sydney", "London", "Barcelona"];
let newCitites=[]
// cities.forEach(function(city) {
//     if(city.toLowerCase()==="sydney"){
//         return
//     }
//     newCitites.push(city)
// });
// console.log(newCitites)

//The function can be written like this as well
cities.forEach(city => {
    if(city.toLowerCase()==="sydney"){
        return
    }
    newCitites.push(city)
});
console.log(newCitites)