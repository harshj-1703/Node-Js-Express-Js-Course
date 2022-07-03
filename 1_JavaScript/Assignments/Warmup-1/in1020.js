//Given 2 int values, return true if either of them is in the range 10..20 inclusive.

function in1020(a, b){
    return ((10<=a && a<=20) || (10<=b && b<=20))?true:false;
}

let a = in1020(12, 99);
let b = in1020(21, 12);
let c = in1020(8, 99);

console.log(a);
console.log(b);
console.log(c);