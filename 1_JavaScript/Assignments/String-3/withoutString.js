/*
Given two strings, base and remove, return a version of 
the base string where all instances of the remove string 
have been removed (not case sensitive). You may assume that 
the remove string is length 1 or more. Remove only non-overlapping 
instances, so with "xxx" removing "xx" leaves "x".
*/

function withoutString(base, remove){
    let blen = base.length;
    let rlen = remove.length;
    let lowbase = base.toLowerCase();
    let lowrem = remove.toLowerCase();
    let temp = '';

    for(i=0;i<blen;i++)
    {
        if(i <= blen - rlen)
        {
            let temp1 = lowbase.substring(i,i+rlen);
            if(temp1 != lowrem)
            {
                temp += base.substring(i,i+1); 
            }
            else
            {
                i+=rlen-1;
            }
        }
        else
        {
            let temp2 = lowbase.substring(i,i+1);
            if(temp2 != lowrem)
            {
                temp += base.substring(i,i+1);
            }
        }
    }

    return temp;
}

let a = withoutString('Hello there', 'llo'); //→ He there
let b = withoutString('Hello there', 'e'); //→ Hllo thr
let c = withoutString('Hello there', 'x'); //→ Hello there

console.log(a);
console.log(b);
console.log(c);