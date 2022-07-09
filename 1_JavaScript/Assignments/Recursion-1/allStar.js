/*
Given a string, compute recursively a new string where 
all the adjacent chars are now separated by a "*".
*/

function allStar(str){
	if(str.length <= 1)
    {
		return str;
    }
	return str[0] + '*' + allStar(str.substring(1));
}

let a = allStar('hello'); //→ h*e*l*l*o
let b = allStar('abc'); //→ a*b*c
let c = allStar('ab'); //→ a*b

console.log(a);
console.log(b);
console.log(c);