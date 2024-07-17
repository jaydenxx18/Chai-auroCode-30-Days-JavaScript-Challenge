console.log('Day 2');
console.log('Activity 1 -  Arithmetic Operations');

let a = 10;
let b = 20;
console.log('Addition: b + a =', b + a);
console.log('Subtraction: b - a =', b - a);
console.log('Mutiplication: b * a =', b * a);
console.log('Division: b / a =', b / a); //Gives Quotient
console.log('Modulo: b % a =', b % a); //Gives Remainder


console.log('Activity 2 -  Assignment Operators');

let c = 10;
c+=10;
console.log('Using += C is '+ c);
c-=5;
console.log('Using -= C is '+ c);


console.log('Activity 3 -  Comparison Operators');

console.log('Using Greater than > :', a > b);
console.log('Using Less than < :', a < b);

let d = '10';

console.log('using == :', a == d); //Doen't check the DataType
console.log('using === :', a === d); //Checks the DataType


console.log('Activity 4 -  Logical Operators');

console.log('Using && (and) true and true will be true :', true && true);
console.log('Using && (and) true and false will be false :', true && false);
console.log('Using || (or) true and true :', true || true);
console.log('Using || (or) true and false :', true || false);
console.log('Using ! (not) true :', !true);
console.log('Using ! (not) false :', !false);


console.log('Activity 5 -  Ternary Operator');
let e = -10;
console.log('Using Ternary Operator : ', e > 0 ? 'Positive' : 'Negative');
console.log('Using Ternary Operator : ', a > 0 ? 'Positive' : 'Negative');