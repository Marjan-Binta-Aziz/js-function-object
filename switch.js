//when we need asjact match
//its a fasater version than if else
//Switch বিভিন্ন অবস্তার উপর ভিত্তি করে বিভিন্ন কাজ করতে ব্যবহৃত হয়
// ------------Syntax ------------//
// switch (expression) {
//     case a:
//         //code block
//         break;
//     case b:
//         //code block
//         break;
//     default:
//         //code block
// }

var grade = '';

switch(grade){
    case 'A':
        console.log('You Grade is A');
        break;
    case 'B':
        console.log('You Grade is B');
        break;
    case 'C':
        console.log('You Grade is C');
        break;
    case 'D':
        console.log('You Grade is D');
        break;
    case 'F':
        console.log('You Grade is F');
        break;
        default:
            console.log('You Grade is not Submit Yet!');
}