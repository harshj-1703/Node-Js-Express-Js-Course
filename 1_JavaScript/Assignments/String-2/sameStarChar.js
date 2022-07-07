/*
Returns true if for every '*' (star) in the string, if there are chars 
both immediately before and after the star, they are the same.
*/

function sameStarChar(str){
    let r = false;
    if(str == '*' || str == '**')
    {
        return true;
    }
    if(str.includes('*') == false)
    {
        return true;
    }
    for(i=0;i<str.length;i++)
    {
        if(str[0] == '*')
        {
            i++;
        }
        if(str[i] == '*' && i!=str.length-1 && i!=str.length)
        {
            if(str[i-1] == str[i+1])
            {
                r = true;
            }
            else
            {
                return false;
            }
        }
        if(str[i] == '*' && str[i+1] == null)
        {
            r = true;
        }
    }
    return r;
}

let a = sameStarChar('xy*yzz');
let b = sameStarChar('xy*zzz');
let c = sameStarChar('*xa*az');

console.log(a);
console.log(b);
console.log(c);