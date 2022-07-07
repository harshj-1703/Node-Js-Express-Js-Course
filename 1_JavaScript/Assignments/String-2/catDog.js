/*
Return true if the string "cat" and "dog" appear 
the same number of times in the given string.
*/

function catDog(str){
    let countdog = 0;
    let countcat = 0;

    for(i=0;i<str.length;i++)
    {
        if(str.substring(i,i+3) == 'cat')
        {
            countcat++;
        }
        if(str.substring(i,i+3) == 'dog')
        {
            countdog++;
        }
    }
    if(countcat == countdog)
    {
        return true;
    }
    return false;
}

let a = catDog('catdog');
let b = catDog('catcat');
let c = catDog('1cat1cadodog');

console.log(a);
console.log(b);
console.log(c);