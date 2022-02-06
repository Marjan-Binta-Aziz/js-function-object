var laptop = {
    model: 'hp-elitebook',
    manufacture: 2019,
    price: 54000,
    processor: 'AMD',
    storage: '256gb',

};

// console.log(laptop);
console.log(laptop.model);
// another way 
var price = laptop.price;
console.log(price);

//set a object property's value

// 1st way 
laptop.storage = '512gd';
console.log(laptop);

//differnent way to set a object property's value

// 2nd way 
laptop["price"] = 590000;
console.log(laptop);

// 3rd way (guraya khawa)
var priceProperty = "price";
laptop[price] = 600000;
console.log(laptop);


console.log(laptop.model);
// console.log(laptop[model]);
// console.log(laptop["model"]);
