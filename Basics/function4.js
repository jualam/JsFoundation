// logic to calculate area
const area = function(radius){
    return Math.PI * radius * radius;
}
// logic to calculate diameter
const diameter = function(radius){
    return 2 * radius;
}

// a reusable function to calculate area, diameter, etc
const calculate = function(radius, logic){ 
    const output = [];
    for(let i = 0; i < radius.length; i++){
        output.push(logic(radius[i]));  // Applying the logic (area/diameter) to each radius
    }
    return output;
}

// Example array of radius values
const radius = [1, 2, 3, 4, 5];

console.log(calculate(radius, area));
console.log(calculate(radius, diameter));
