//Given three int values, a b c, return the largest.

function intMax(a, b, c){
    if(a>b && a>c)
    {
        return a;
    }
    else if(b>a && b>c)
    {
        return b;
    }
    else
    {
        return c;
    }
}

let a = intMax(1, 2, 3);
let b = intMax(1, 3, 2);
let c = intMax(3, 2, 1);

console.log(a);
console.log(b);
console.log(c);