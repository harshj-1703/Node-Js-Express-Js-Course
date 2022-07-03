/*
Return true if the given non-negative number is a multiple 
of 3 or a multiple of 5. (Hint: Use the % 'mod' operator)
*/

function or35(n){
    return ((n%3==0)||(n%5==0))?true:false;
}

let a = or35(3);
let b = or35(10);
let c = or35(8);

console.log(a);
console.log(b);
console.log(c);