/*
We'll say that a lowercase 'g' in a string is "happy" if there is another 'g' 
immediately to its left or right. Return true if all the g's in the given string are happy.
*/

function gHappy(str){
    let r = false;
    if(str == '')
    {
        return true;
    }
    if(str[str.length-1] == 'g' && str.length > 2 && str[str.length-2] != 'g')
    {
        return false;
    }
    for(i=0;i<str.length-1;i++)
    {
        if(str[i] == 'g')
        {
            if(str[i-1] == 'g' || str[i+1] == 'g')
            {
                r = true;
            }
            else
            {
                r = false;
            }
        }
        else
        {
            i++;
        }
    }
    return r;
}

let a = gHappy('xxggxx'); //→ true
let b = gHappy('xxgxx'); //→ false
let c = gHappy('xxggyygxx'); //→ false

console.log(a);
console.log(b);
console.log(c);