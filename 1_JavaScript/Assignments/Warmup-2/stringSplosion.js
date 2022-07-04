//Given a non-empty string like "Code" return a string like "CCoCodCode".

function stringSplosion(str){
    let str1 = '';
    for(i=0;i<=str.length;i++)
    {
        str1 += str.slice(0,i);
    }
    console.log(str1);
}

stringSplosion('Code');