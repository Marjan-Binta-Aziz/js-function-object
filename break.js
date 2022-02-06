// var i = 0;
// while (i < 20){
//     console.log(i);
//     i++;
// }

// // যখন i এর মান 5 তাহলে আমার এই লুপটা  বন্ধ হয়ে যাবে

// var i = 0;
// while (i < 20){
//     console.log(i);
//     if (i == 5){
//         break;
//     }
//     i++;
// }


// for(var i = 0; i < 20; i++){
//     console.log(i);
//     if (i <= 8){
//         break;
//     }
// }



var numbers = [12, 40 ,500, 80, 200, 300];
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if (number > 150){
        continue;
    }
    console.log(number);

}



