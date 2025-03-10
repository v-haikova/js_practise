"use strict"

var value = 4;
var power = 4;

function pow(a, b) {
    let counter = 1;
    let result = a;

    while (counter < b) {
        result *= a;
        counter++;       
    }
    
    return result;
 }

console.log("Результат дорівнює: " + pow(value, power));