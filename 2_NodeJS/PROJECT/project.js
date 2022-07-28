//Note App Devloped By Kush jadav, Huzefa Dhankot, Harsh Jolapara 

const colors = require('colors');   //include colors
const filesystem = require('fs');   //filesystem includes
const prompt = require('prompt-sync')();    //user input require

console.log('-------------------------------'.red);
console.log('Welcome To Notes'.random);
console.log('-------------------------------'.red);
console.log('1. Press 1 For Make File'.green);
console.log('2. Press 2 For Append File'.green);
console.log('3. Press 3 For Rename File'.green);
console.log('4. Press 4 For Read File'.green);
console.log('5. Press 5 For Delete File'.green);
console.log('-------------------------------\n'.red);

const input = prompt('Enter Your Choice : '.brightRed);

//make file
if(input == 1)
{
    const filename = prompt('Enter Note Name : '.brightBlue);
    if (filesystem.existsSync(filename+'.txt')) {
        // path exists
        console.log('Sorry Note is Already Exits!.'.green);
    } 
    else
    {
        const content = prompt('Enter Note Content : '.brightBlue);
        filesystem.writeFile(filename+'.txt',content,(err)=>{
            if(err)
            {
              console.log('Error making note...'.green);
              return;
            }
            else
            {
                console.log("File is created...".green);
            }
          });
    }
}
//append file
else if(input == 2)
{
    const filename = prompt('Enter Note Name : '.brightBlue);
    if (filesystem.existsSync(filename+'.txt')) {
        // path exists
        const content = prompt('Enter Note Content To Append : '.brightBlue);
        filesystem.writeFile(filename+'.txt',content,(err)=>{
            if(err)
            {
              console.log('Error appending file...'.green);
              return;
            }
            else
            {
                console.log("Note is appended...".green);
            }
          });
    } 
    else
    {
        console.log('Sorry Note is Not Exits Make It!'.green);
    }
}
//rename file
else if(input == 3)
{
    const filename = prompt('Enter Note Name : '.brightBlue);
    if (filesystem.existsSync(filename+'.txt')) {
        // path exists
        const content = prompt('Enter Note Name To Rename : '.brightBlue);
        filesystem.rename(filename+'.txt',content+'.txt',(err)=>{
            if(err)
            {
              console.log('Error renaming file...'.green);
              return;
            }
            else
            {
                console.log("Note is renamed...".green);
            }
          });
    }
    else
    {
        console.log('Sorry Note is Not Exits Make It!'.green);
    }
}
//read file
else if(input == 4)
{
    const filename = prompt('Enter Note Name : '.brightBlue);
    if(filesystem.existsSync(filename+'.txt')) {
        filesystem.readFile(filename+'.txt','utf8',(err,fileContent)=>{
            if(err){
                console.log('Error reading file...'.green);
                return;
            }
            else 
            {
                console.log(fileContent);
            }
        });
    }
    else
    {
        console.log('Sorry Note is Not Exits Make It!'.green);
    }
}
//delete file
else if(input == 5)
{
    const filename = prompt('Enter Note Name : '.brightBlue);
    if (filesystem.existsSync(filename+'.txt')) {
        filesystem.unlinkSync(filename+'.txt');
        if (filesystem.existsSync(filename+'.txt')) {
            // path exists
            console.log("exists:", 'xyz.txt');
        } 
        else
        {
            console.log("Deleted File:", filename+'.txt');
        }
    }
    else
    {
        console.log('Sorry Note is Not Exits Make It!'.green);
    }
}
//not getting
else
{
    console.log('sorry!, not getting😅'.green);
}