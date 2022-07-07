/*
We'll say that a String is xy-balanced if for all the 'x' 
chars in the string, there exists a 'y' char somewhere 
later in the string. So "xxy" is balanced, but "xyx" is not. 
One 'y' can balance multiple 'x's. Return true if the 
given string is xy-balanced.
*/

function xyBalance(str){
    let x = false;
    let y = false;

    for(i=0;i<str.length;i++)
    {
        if(str[i] == 'x' && y == true)
        {
            x = true;
            y = false;
        }
        else if(str[i] == 'x')
        {
            x = true;
        }
        if(str[i] == 'y' && x == true)
        {
            y = true;
        }
    }
    if(x==false)
    {
        y = true;
    }
    return y;
}

let a = xyBalance('aaxbby');
let b = xyBalance('aaxbb');
let c = xyBalance('yaaxbb');

console.log(a);
console.log(b);
console.log(c);