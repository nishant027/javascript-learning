// If-else

// Q1- Write a program to find maximum between two numbers.
// Solution
let num1 = Number(prompt("Enter number 1"));
let num2 = Number(prompt("Enter number 2"));

if(num1==num2){
    console.log(`${num1} are equal for both`);
}
else if(num1>num2){
    console.log(`${num1} is greater`);
}
else{
    console.log(`${num2} is greater`);
}

// Q2- Write a program to find maximum between three numbers.
// Solution
let numA = Number(prompt("Num 1:"));
let numB = Number(prompt("Num 2:"));
let numC = Number(prompt("Num 3:"));

if(numA>numB){
    if(numA>numC){
        console.log(`${numA} is greater`);
    }
    else{
        console.log(`${numC} is greater`);
    }
}
else if(numB>numC){
    console.log(`${numB} is greater`);
}
else{
    console.log(`${numC} is greater`);
}

// Q3- Write a program to check whether a number is negative, positive or zero.
// Solution
let checkNum = Number(prompt("Enter Number:"));

if(checkNum>0){
    console.log("Number is positive");
}
else if(checkNum<0){
    console.log("Number is negative");
}
else{
    console.log("Number is zero");
}

// Q4- Write a program to check whether a number is divisible by 5 and 11 or not.
// Solution
let divBy = Number(prompt("Enter Number:"));

if(divBy%5==0 && divBy%11==0){
    console.log("Number is divisible by both 5 and 11");
}
else{
    console.log("Number is not divisible by both 5 and 11");
}

// Q5- Write a program to check whether a number is even or odd.
// Solution
let eoNum = Number(prompt("Enter Number:"));

if(eoNum%2==0){
    console.log("Number is Even");
}
else{
    console.log("Number is Odd");
}

// Q6- Write a program to check whether a year is leap year or not.
// Solution
let checkLeap = Number(prompt("Enter a year"));

if(checkLeap%4==0 && checkLeap%100!=0 || checkLeap%400==0){
    console.log(`${checkLeap} is a leap year`);
}
else{
    console.log(`${checkLeap} is not a leap year`);
}

// Q7- Write a program to check whether a character is alphabet or not.
// Solution
let alphaChk = prompt("Enter a value:");

if(alphaChk>='a' && alphaChk<='z'){
    console.log("It is alphabet");
}
else{
    console.log("It is not alphabet");
}

// Q8- Write a program to input any alphabet and check whether it is vowel or consonant.
// Solution
let chkvc = prompt("Enter a value");

if(chkvc=='a'||chkvc=='A'||chkvc=='e'||chkvc=='E'||chkvc=='i'||chkvc=='I'||chkvc=='o'||chkvc=='O'||chkvc=='u'||chkvc=='U'){
    console.log("It is a vovel");
}
else if(chkvc>='a'&&chkvc<='z'||chkvc>='A'&&chkvc<='Z'){
    console.log("It is a consonant");
}
else{
    console.log("It is not alphabet");
}

// Q9- Write a program to input any character and check whether it is alphabet, digit or special character.
// Solution
let ads = prompt("Enter single value");

if(ads>='a'&&ads<='z' || ads>='A'&&ads<='Z'){
    console.log("Its Alphabet");
}
else if(ads>=0&&ads<=9){
    console.log("Its Digit");
}
else{
    console.log("Its Special Character");
}
