//Given a string, return true if the string starts with 'hi'and false otherwise.

function startHi(str){
    // console.log(str.slice(0,2));
    return str.slice(0,2)==='hi'?true:false;
}

let a = startHi('hi there');
let b = startHi('hi');
let c = startHi('hello hi');

console.log(a);
console.log(b);
console.log(c);
