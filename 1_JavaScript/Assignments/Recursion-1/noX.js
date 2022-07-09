/*
Given a string, compute recursively a new string where all the 'x' chars have been removed.
*/

function noX(str){
	if(str.length == 0)
    {
		return str;
    }
	if(str[0] == 'x')
    {
		return noX(str.substring(1));
    }
	return str[0] + noX(str.substring(1));
}

let a = noX('xaxb'); //→ ab
let b = noX('abc'); //→ abc
let c = noX('xx'); //→

console.log(a);
console.log(b);
console.log(c);