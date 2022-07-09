/*
Given a string, compute recursively (no loops) a new string 
where all the lowercase 'x' chars have been changed to 'y' chars.
*/

function changeXY(str){
    let ch;
	if(str.length == 0)
    {
		return str;
    }
	ch = str[0];
	if(ch == 'x')
    {
		return 'y' + changeXY(str.substring(1));
    }
	return ch + changeXY(str.substring(1));
}

let a = changeXY('codex'); //→ codey
let b = changeXY('xxhixx'); //→ yyhiyy
let c = changeXY('xhixhix'); //→ yhiyhiy

console.log(a);
console.log(b);
console.log(c);