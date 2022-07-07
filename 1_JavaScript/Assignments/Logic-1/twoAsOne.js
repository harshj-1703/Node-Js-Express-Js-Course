//Given three ints, a b c, return true if it is possible to add two of the ints to get the third.

function twoAsOne(a, b, c){
    if(a+b == c || b+c == a || a+c == b)
    {
        return true;
    }
    else
    {
        return false;
    }
}

let a = twoAsOne(1, 2, 3);  //→ true
let b = twoAsOne(3, 1, 2);  //→ true
let c = twoAsOne(3, 2, 2);  //→ false

console.log(a);
console.log(b);
console.log(c);