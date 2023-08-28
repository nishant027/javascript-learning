// Q1- Length and breadth of a rectangle are 5 and 7 respectively. Write a program to calculate the area and perimeter of the rectangle.
// Solution
var length = prompt("Enter Length:");
var breadth = prompt("Enter Breadth:");
var area = length*breadth;
var perimeter = 2*length + 2*breadth;
console.log("Area and Perimeter = ",area, perimeter);

// Q2- Write a program to calculate the perimeter of a triangle having sides of length 2,3 and 5 units.
// Solution
var side1 = parseInt(prompt("Enter side 1:"));
var side2 = parseInt(prompt("Enter side 2:"));
var side3 = parseInt(prompt("Enter side 3:"));
var perimeterOfTriangle = side1+side2+side3;
console.log("Perimeter = ",perimeterOfTriangle);
// console.log("Perimeter = "+perimeterOfTriangle);    - this will print 101010 as we inserted 10 for all three so this + sign will change the value to a String

// Q3- Write a program to add 8 to the number 2345 and then divide it by 3. Now, the modulus of the quotient is taken with 5 and then multiply the resultant value by 5. Display the final result.
// Solution
console.log((((8+2345)/3)%5)*5)

// Q4- Now, solve the above question using assignment operators (eg. +=, -=, *=).
// Solution
let change = 8
change +=2345
change /=3
change %=5
change *=5
console.log(change)

// Q6- Write a program to check if the two numbers 23 and 45 are equal.
// Solution
console.log(23==45);

// Q7- Assign values of variables 'a' and 'b' as 55 and 70 respectively and then check if both the conditions 'a < 50' and 'a < b' are true.
// Solution
let a = 55
let b = 70
console.log(a<50&&a<b);

// Q8- Now solve the above question to check if atleast one of the conditions 'a < 50' or 'a < b' is true.
// Solution
console.log(a<50||a<b);

// Q9- If the marks of Robert in three subjects are 78,45 and 62 respectively (each out of 100 ), write a program to calculate his total marks and percentage marks.
// Solution
let marks1 = 78
let marks2 = 45
let marks3 = 62
let total = marks1+marks2+marks3;
let percentage = total/3;
console.log("Total = ",total,"and Percentage = ",parseInt(percentage));

// Q10 - Suppose the values of variables 'num1' and 'num2' are 6 and 8 respecrtively, write two programs to swap the values of the two variables.
// 1 - first program by using a third variable
// 2 - second program without using any third variable
// Solution
let num1 = 6;
let num2 = 8;
// 1.
let swap;
console.log("num1 = ",num1," & num2 = ",num2);
swap = num1;
num1 = num2;
num2 = swap;
console.log("num1 = ",num1," & num2 = ",num2);
// 2.
console.log("num1 = ",num1," & num2 = ",num2);
num1 = num1 + num2;
num2 = num1 - num2;
num1 = num1 - num2;
console.log("num1 = ",num1," & num2 = ",num2);
