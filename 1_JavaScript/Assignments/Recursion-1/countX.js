/*
Given a string, compute recursively (no loops) the 
number of lowercase 'x' chars in the string.
*/

function countX(str){
    if(str.length == 0)
    {
        return 0;
    }
    if(str[0] == 'x')
    {
		return 1 + countX(str.substring(1,str.length));
    }
	return countX(str.substring(1,str.length));
}

let a = countX('xxhixx'); //→ 4
let b = countX('xhixhix'); //→ 3
let c = countX('hi'); //→ 0

console.log(a);
console.log(b);
console.log(c);