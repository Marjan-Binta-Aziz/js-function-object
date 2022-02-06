 //function declearation

function onFan() {
    console.log('go to the swithch')
    console.log('on the swithch')
    console.log('fan is on now')
}
 //function call
onFan();

var nums = [4, 5, 7, 6, 8, 2, 4, 1, 15];
var numsIndex = nums.indexOf(6);
console.log(numsIndex);

function getReminder(number1, number2) {
    number1 % number2;
  }
  
  const reminder = getReminder(12, 2);
  
  console.log(reminder);

function addNumber(number1, number2) {
    return "Result is " + number1 + number2;
  }
  
  var result = addNumber(5, 4);
