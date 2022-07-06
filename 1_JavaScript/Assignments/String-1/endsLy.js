//Given a string, return true if it ends in "ly".

function endsLy(str){
    return true?str.slice(str.length-2,str.length)=='ly':false;
}

let a = endsLy('oddly');
let b = endsLy('y');
let c = endsLy('oddl');

console.log(a);
console.log(b);
console.log(c);