/*
Given a string of odd length, return the 
string length 3 from its middle, so "Candy" 
yields "and". The string length will be at least 3.
*/

function middleThree(str){
    return str.length>3?
            str.slice(parseInt(str.length/2)-1,parseInt(str.length/2)+2)
            :str;
}

let a = middleThree('Candy');
let b = middleThree('and');
let c = middleThree('solving');

console.log(a);
console.log(b);
console.log(c);