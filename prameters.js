// js funtion parameters 

function bringCoffee(taka) {
    console.log('Coffee price is ' ,taka);
    console.log('Coffee Plz');
    var onePakectsCoffee = 550;
    var getCoffee = taka / onePakectsCoffee;
    return getCoffee;
}

var money = 2550;
var coffee = bringCoffee(money);
console.log(coffee);