/*
This question is modified from parenBit on CodingBat to starBit. 
Given a string that contains a dash and a star, compute recursively 
a new string made of only of the dash and star and their contents, 
so "xyz-abc*123" yields "-abc*".
*/

function starBit(str){
    len = str.length;
	if(str[0] != '-')
	{
		if(str[len-1] != '*')
        {
			return starBit(str.substring(1, len -1));
        }
		return starBit(str.substring(1));
	}
	if(str[len-1] != '*')
    {
		return starBit(str.substring(0, len - 1));
    }
	return str;
}

let a = starBit('xyz,-abc*123'); //→ -abc*
let b = starBit('x,-hello*'); //→ -hello*
let c = starBit(',-xy*1'); //→ -xy*

console.log(a);
console.log(b);
console.log(c);