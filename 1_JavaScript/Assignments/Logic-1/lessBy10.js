//Given three ints, a b c, return true if one of them is 10 or more less than one of the others.

function lessBy10(a, b, c){
    let high = Math.max(a,b);
    high = Math.max(high, c);
  
    if (high - a >= 10 || high - b >= 10 || high - c >=10)
    {
        return true;
    }
    else
    {
        return false;
    } 
}

let a = lessBy10(1, 7, 11); //→ true
let b = lessBy10(1, 7, 10); //→ false
let c = lessBy10(11, 1, 7); //→ true

console.log(a);
console.log(b);
console.log(c);