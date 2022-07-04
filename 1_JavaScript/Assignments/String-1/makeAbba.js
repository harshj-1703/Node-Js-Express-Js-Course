/*
Given two strings, a and b, return the result of putting 
them together in the order abba, e.g. "Hi" and "Bye" returns "HiByeByeHi".
*/

function makeAbba(a, b){
    return a+b+b+a;
}

let a = makeAbba('Hi', 'Bye');
let b = makeAbba('Yo', 'Alice');
let c = makeAbba('What', 'Up');

console.log(a);
console.log(b);
console.log(c);