console.log("Day 3");

console.log('Activity 1 - if-else Statement');
console.log('Task 1');

let a = 3;

if (a === 0) {
    console.log('a is 0');
} else if (a > 0) {
    console.log('a is positive');
} else if (a < 0) {
    console.log('a is negative');
}

console.log('Task 2');

let b = 17;
if (b >= 18) {
    console.log('You are eligible to vote');
} else {
    console.log('You are not eligible to vote');
}


console.log('Activity 2 - Nested if-else Statement');

console.log('Task 3');
let c = 10;

if (a > b) {
    if (a > c) {
        console.log("a is the largest");
    } else {
        console.log("c is the largest");
    }
} else {
    if (b > c) {
        console.log("b is the largest");
    } else {
        console.log("c is the largest");
    }
}


console.log('Activity 3 - Switch Statement');

console.log('Task 4');
function getDayName(dayNumber) {
    switch (dayNumber) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            return "Invalid day number";
    }
}

console.log(getDayName(3));
console.log(getDayName(1));
console.log(getDayName(8));


console.log('Task 5');
function calculateGrade(score) {
    let grade;

    switch (true) {
        case score >= 90:
            grade = 'A';
            break;
        case score >= 80:
            grade = 'B';
            break;
        case score >= 70:
            grade = 'C';
            break;
        case score >= 60:
            grade = 'D';
            break;
        default:
            grade = 'F';
    }

    return grade;
}

const score = 85;
const grade = calculateGrade(score);
console.log(`For a score of ${score}, the grade is ${grade}`);


console.log('Activity 4 - Conditional (Ternary) Operator');

console.log('Task 6');
function checkEvenOdd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
}

console.log(checkEvenOdd(4));
console.log(checkEvenOdd(7));
console.log(checkEvenOdd(0));


console.log('Activity 5 - Combine Conditions');

console.log('Task 7');
function isLeapYear(year) {
    // Leap year is divisible by 4,
    // but not divisible by 100 unless also divisible by 400
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Example usage:
console.log(isLeapYear(2020));
console.log(isLeapYear(2021));
console.log(isLeapYear(2000));
console.log(isLeapYear(1900));