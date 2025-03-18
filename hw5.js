"use strict";

var services = {
  "стрижка": "60 грн",
  "гоління": "80 грн",
  "Миття голови": "100 грн",

  price: function () {
    let resultSum = 0;
    let values = this.priceNumberArray();
    for (let index = 0; index < values.length; index++) {
        resultSum += values[index];
    }

    return resultSum;
  },

  minPrice: function () {
    let values = this.priceNumberArray();
    let min = values[0];
  
    for (let i = 1; i < values.length; i++) {
      if (values[i] < min) {
        min = values[i];
      }
    }
  
    return min;
  },

  maxPrice: function () {
    let values = this.priceNumberArray();
    let max = values[0];
  
    for (let i = 1; i < values.length; i++) {
      if (values[i] > max) {
        max = values[i];
      }
    }
  
    return max;
  },

  priceNumberArray: function() {
    let result = [];
    let values = Object.values(this);
    for (let index = 0; index < values.length; index++) {
        if (typeof values[index] === "string") {
            result.push(this.extractPrice(values[index]));
        }
    }
    return result;
  },

  extractPrice: function (str) {
    const number = parseFloat(str);
    if (isNaN(number)) {
      return 0;
    }

    return number;
  },
};

services['Розбити скло'] = "200 грн";

console.log("Total price: " + services.price());
console.log("Max price: " + services.maxPrice());
console.log("Min price: " + services.minPrice());