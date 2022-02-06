function namta (num1){
    for(i = 1; i <= 10; i++){
        console.log('13 *', i, '=', num1 * i);
    }
}
var num1 = 13;
result = namta(num1);

//challange 2
function change(input){
    var m = input.toLowerCase();
    return m;
}
var myInput = "MARJAN";
console.log(change(myInput));



// challange 3

function fullName(firstName, lastName){
    var result = firstName + lastName;
    return result;
}

const firstName = 'Marjan ';
const lastName = 'Troyee';
console.log(fullName(firstName, lastName));
