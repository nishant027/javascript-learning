// Q1- Write a program in to display the first 10 natural numbers.
// Solution

for(let i=0; i<=10; i++){
    console.log(i);
}

// Q2- Write a program to compute the sum of the first 10 natural numbers. 
// Solution
let sumOfnn =0;

for(let i=1; i<=10; i++){
    sumOfnn = sumOfnn + i;
}
console.log(sumOfnn);

// Q3- Write a program in to display n terms of natural numbers and their sum. 
// Solution
let tillNN = Number(prompt("Enter a number"));
let sumofTnn = 0;

for(let i=1; i<=tillNN; i++){
    console.log(i);
    sumofTnn = sumofTnn + i;
}
console.log(sumofTnn);

// Q4- Write a program in to read 10 numbers from the keyboard and find their sum and average. 
// Solution
let sumOften = 0;
for(let i=1; i<=10; i++){
    console.log(`Enter Number:${i} `);
    let tenNums = Number(prompt());
    sumOften = sumOften + tenNums;
}
console.log(sumOften);

// Q5- Write a program in to display the multiplication table for a given integer. 
// Solution
let givenNum = Number(prompt("Enter number for table"));
for(let j=1; j<=10; j++){
    console.log(`${givenNum} X ${j} = ${givenNum*j}`);
}

// Q6- Write a program in to display the cube of the number up to an integer. 
// Solution
let gibCbe = Number(prompt("Enter a number"));

for(let cbN=1; cbN<=gibCbe; cbN++){
    console.log(`Cube of ${cbN} = ${cbN*cbN*cbN}`);
}

// Q7- Write a program in to display the multiplier table vertically from 1 to n. 
// Solution
let dtN = Number(prompt("Enter a number"));

for(let out=1; out<=10; out++){
    for(let inner=1; inner<=dtN; inner++){
        document.write(`${out} X ${inner} = ${out*inner} `);
    }
    console.log()
}

// Q8- Write a program to display the n terms of odd natural numbers and their sum.
// Solution
let oddN = Number(prompt("Enter a number"));
let oddSum = 0;

for(let count=1; count<=oddN; count++){
    console.log(count*2-1);
    oddSum = oddSum + (count*2-1);
}
console.log(oddSum);
