console.log('Day 1');

console.log('Activity 1 - Variable Declaration');

var i = 15;
console.log( "Value of i is "+ i);
let j = 'jaydenxx18';
console.log('value of j is '+ j);


console.log('Activity 2 - Constant Declaration');

const k = true;

console.log('Value of k is '+ k);

console.log('Activity 3 - Data Types');

let l = 10;
let m = 'jd';
let n = false;
let o;
let p = null;
let q = BigInt("123456789012345678901234567890");
let r = Symbol('foo');
let s = [1,2,3,4,5];
let t = {name: 'jd', age: 18};

console.log("Type of l is:" ,typeof l);
console.log("Type of m is:" ,typeof m);
console.log("Type of n is:" ,typeof n);
console.log("Type of o is:" ,typeof o);
console.log("Type of p is:" ,typeof p);
console.log("Type of q is:" ,typeof q);
console.log("Type of r is:" ,typeof r);
console.log("Type of s is:" ,typeof s);
console.log("Type of t is:" ,typeof t);

console.log('Activity 4 - Reassigning Variables');

let u = 10;
console.log('Value of u before reassign is ', u);

u = "jd's codespace";
console.log('Value of u after reassign is ', u);

console.log('Activity 5 - Understanding Const');

const v = 10;

console.log('Value of v is ', v);

console.log('Reassigning value to const v');

v = 20; // This will throw an error
console.log('Value of v after reassign is ', v);