// 27-01-2023

// Integer = full number
//Float = 3.96
//Math Operations: +, -, *, /
//toFixed
// Convert; parseInt, parseFloat
//Shorthand; +=,-=, ++, --

//18-2 Declare Array, array length and array index

//Array
var friendsage = [11, 55, 23, 69, 52];

//18-3 Array index, get and set by index, indexOf

var numbers =[45, 68, 78, 56, 89, 98];

// get element by index
console.log(numbers[2]);

//find index of an element
var positionIndex = numbers.indexOf(56);
console.log(positionIndex);


var lengthArray = numbers.length;
console.log(lengthArray);

//--------------<<<<<---18-4------>>>>>-------------
//18-4 Add or remove element from arry using push, pop

numbers.push(63);
console.log(numbers);

var friends =['balam', 'kalam', 'salam' ];
friends.push('gelam');
friends.push('pailam');
console.log(friends);

//use pop to remove last element
var batilFriend  =friends.pop();
console.log(friends);
console.log(batilFriend);

//add first element
friends.unshift('first');
//console.log(friends);
 
// remove first element
friends.shift();
console.log(friends);