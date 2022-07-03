//Given two temperatures, return true if one is less than 0 and the other is greater than 100.

function icyHot(temp1, temp2){
    return ((temp1 > 100 && temp2 < 0) || 
    (temp1 < 0 && temp2 > 100))?true:false;
}

let a = icyHot(120, -1);
let b = icyHot(-1, 120);
let c = icyHot(2, 120);

console.log(a);
console.log(b);
console.log(c);