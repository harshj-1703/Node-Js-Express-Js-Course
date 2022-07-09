/*
Given a string, compute recursively the number of times lowercase "hi" appears 
in the string, however do not count "hi" that have an 'x' immedately before them.
*/

function countHi2(str){
    if(str.length < 2)
    {
        return 0;
    }
    if(str.length == 2)
    {
		return (str == "hi") ? 1 : 0;
    }
    if(str[0] == 'x')
	{
		if(str.substring(1, 3) == "hi")
        {
			return countHi2(str.substring(3));
        }
		return countHi2(str.substring(1));
	}
	if(str.substring(0, 2) == "hi")
    {
		return 1 + countHi2(str.substring(2));
    }
	if(str.substring(1, 3) == "hi")
    {
		return 1 + countHi2(str.substring(3));
    }
	return countHi2(str.substring(2));
}

let a = countHi2('ahixhi');  //→ 1
let b = countHi2('ahibhi');  //→ 2
let c = countHi2('xhixhi');  //→ 0

console.log(a);
console.log(b);
console.log(c);