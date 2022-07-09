/*
Return the number of times that the string "hi" appears anywhere in the given string.
*/

function countHi(str){
    if(str.length == 0)
    {
        return 0;
    }
    if(str[0] == 'h' && str[1] == 'i')
    {
		return 1 + countHi(str.substring(1,str.length));
    }
	return countHi(str.substring(1,str.length));
}

let a = countHi('abc hi ho'); //→ 1
let b = countHi('ABChi hi'); //→ 2
let c = countHi('hihi'); //→ 2

console.log(a);
console.log(b);
console.log(c);