/*
Given a string, return the length of the largest "block" in 
the string. A block is a run of adjacent chars that are the same.
*/

function maxBlock(str){
    count = 0;
    len = str.length;
    tmpcount = 1;

    if(len == 0)
    {
        return 0;
    }

    for(i=0;i<len;i++)
    {
        if(i<len -1 && str[i]==str[i+1])
        {
            tmpcount++;
        }
        else
        {
            tmpcount = 1;
        }
        if(tmpcount > count)
        {
            count = tmpcount;
        }
    }

    return count;
}

let a = maxBlock('hoopla'); //→ 2
let b = maxBlock('abbCCCddBBBxx'); //→ 3
let c = maxBlock(''); //→ 0

console.log(a);
console.log(b);
console.log(c);