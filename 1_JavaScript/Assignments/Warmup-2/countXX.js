/*
Count the number of 'xx' in the given string. 
We'll say that overlapping is allowed, so 'xxx' contains 2 'xx'.
*/

function countXX(str){
    let count = 0;
    for(i=0;i<str.length;i++)
    {
        if(str[i]===str[i+1] && str[i]==='x')
        {
            count++;
        }
    }

    return count;
}

let a = countXX('abcxx');
let b = countXX('xxx');
let c = countXX('xxxx');

console.log(a);
console.log(b);
console.log(c);