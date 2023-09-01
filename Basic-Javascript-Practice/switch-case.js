// Q1- Write a program to print day of week name using switch case.
// Solution
let dwname = Number(prompt("Enter week number"));

switch(dwname){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Something else");
        break;
}

// Q2- Write a program print total number of days in a month using switch case.
// Solution
console.log("Month Name ex - January")
let whatsDay = prompt("Enter Month Number of Name");

switch(whatsDay){
    case '1': case "January": case'3': case "March": case'5': case "May": case'7': case "July": case'8': case "August": case '10': case "October": case '12': case "December":
        console.log(31);
        break;
    case '2': case "February":
        console.log(29);
        break;
    case '4': case "April": case '11': case "November": case '6': case "June": case '9': case "September":
        console.log(30);
        break;
    default:
        console.log("Something else");
        break;
}

// Q3- Write a program to check whether an alphabet is vowel or consonant using switch case.
// Solution
let vocCheck = prompt("Enter to Check");

switch(vocCheck){
    case 'a': case 'A': case 'e': case 'E': case 'i': case 'I': case 'o': case 'O': case 'u': case 'U': 
        console.log("Vowel");
        break;
    default:
        console.log("Constant");
        break;
}

// Q4- Write a program to find maximum between two numbers using switch case.
// Solution
let number1 = Number(prompt("Enter number 1"));
let number2 = Number(prompt("Enter number 2"));

switch(number1>number2){
    case true:
        console.log(`${number1} is greatest`);
        break;
    case false:
        console.log(`${number2} is greatest`);
        break;
    default:
        console.log("Patani bhai");
        break;
}

// Q5- Write a program to check whether a number is even or odd using switch case.
// Solution
let evodNum = Number(prompt("Enter a number"));

switch(evodNum%2==0){
    case true:
        console.log(`${evodNum} is even`);
        break;
    case false:
        console.log(`${evodNum} is odd`);
        break;
    default:
        console.log("Patani Bhai");
        break;
}

// Q6- Write a program to check whether a number is positive, negative or zero using switch case.
// Solution

let pnzNum = Number(prompt("Enter Number"));

switch(pnzNum>0){
    case true:
        console.log("Positive");
        break;
    case false:
        switch(pnzNum<0){
            case true:
                console.log("Negative");
                break;
            case false:
                console.log("Zero");
                break;
        }
        break;
    default:
        console.log("Pata Nahi");
        break;
}

// Q7- Write a program to create Simple Calculator using switch case.
// Solution
console.log("******Calculator******")
let input_number1 = Number(prompt("Enter Number 1"));
let operator = prompt("Enter a Operator");
let input_number2 = Number(prompt("Enter Number 2"));

switch(operator){
    case '+':
        console.log(` = ${input_number1+input_number2}`);
        break;
    case '-':
        console.log(` = ${input_number1-input_number2}`);
        break;
    case '*':
        console.log(` = ${input_number1*input_number2}`);
        break;
    case '/':
        console.log(` = ${input_number1/input_number2}`);
        break;
    default:
        console.log("Pata Nahi");
        break;
}
console.log("************************************")
