var price1 = 35;
price1 = price1 + 10; // price1 += 10;
console.log(price1);

var age = 15;
age = age + 1;//same
age++;

var firstName = "Ismot";
var lastName = "Ara";
var fullName = firstName + ' ' + lastName;
console.log(fullName);
console.log('10');
console.log(10);
//convert string to number
var string1 = '321';
var cstring1 = parseInt(string1);
console.log(cstring1);
var gpa = '3.44';
var gpaNumber = parseFloat(gpa);
console.log(gpaNumber);
console.log(typeof gpaNumber);
var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
console.log(sum);
sum = sum.toFixed(2);
console.log(sum);
console.log(typeof sum);
// Practice problem 1
var mom = 1000;
var orange = 300;
var apple = 400;
var buy = orange + apple;
var output1 = mom - buy;
console.log(output1);
// Practice problem 2
// Write a program to calculate the average marks of Mathematics, Biology, 
//Chemistry, Physics, and Bangla of a student.
var math = 75.25;
var bio = 65;
var che = 80;
var phy = 35.45;
var bang = 99.50;
var sum1 = math + bio + che + phy + bang;
var average = sum1 / 5;
average = average.toFixed(2);
console.log(average);
//71.04
// Practice problem 3
// John’s teacher gave him two variables. Each variable contains a string. John’s teacher asked him to
// combine these two strings and print them in one line. Help John write the program.
var firstText = "I am going to be";
var secondText = "an awesome web developer";
var joinText = firstText + ' ' + secondText;
console.log(joinText);
// Practice problem 4
// Sarah’s mother is teaching her mathematics. She gave Sarah a number and asked her what the
// remainder would be if she divided the number by 5. Help Sarah write the program.
var output = 119 % 5;
console.log(output);
// 4 

