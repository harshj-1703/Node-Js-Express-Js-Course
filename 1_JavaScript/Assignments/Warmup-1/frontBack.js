/*
Given a string, return a new string where the first and last chars have been exchanged.
*/

function frontBack(str){
    // console.log(str.slice(0,1));
    // console.log(str.slice((str.length)-1,str.length));
    // console.log(str.slice(1,(str.length)-1));

    return str.length==1?str:(str.slice((str.length)-1,str.length)+
            str.slice(1,(str.length)-1)+str.slice(0,1));
}

let a = frontBack('code');
let b = frontBack('a');
let c = frontBack('ba');

console.log(a);
console.log(b);
console.log(c);