/*
Given a string and a non-empty substring sub, compute recursively 
the largest substring which starts and ends with sub and return its length.
*/

function strDist(str, sub){
    let strlen = str.length;
    let sublen = sub.length;

    if(strlen < sublen)
    {
		return 0;
    }
	if(str.substring(0, sublen) == sub)
	{
		if(str.substring(strlen - sublen, strlen) == sub)
        {
			return strlen;
        }
		return strDist(str.substring(0, strlen - 1), sub);
	}
	return strDist(str.substring(1), sub);
}

let a = strDist('catcowcat', 'cat');  //→ 9
let b = strDist('catcowcat', 'cow');  //→ 3
let c = strDist('cccatcowcatxx', 'cat');  //→ 9

console.log(a);
console.log(b);
console.log(c);