/*
Given a string of even length, return the first 
half. So the string "WooHoo" yields "Woo".
*/

function firstHalf(str){
    return str.slice(0,str.length/2);
}

let a = firstHalf('WooHoo');
let b = firstHalf('HelloThere');
let c = firstHalf('abcdefg');

console.log(a);
console.log(b);
console.log(c);