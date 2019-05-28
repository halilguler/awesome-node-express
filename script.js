const fs = require('fs');

fs.readFile('hello.txt',(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log('Async',data.toString('utf8'));
})

const file = fs.readFileSync('./hello.txt');
console.log('Sync',file.toString('utf8'));

//APPEND
fs.appendFile('./hello.txt',' This is cool!',err=>{
    if(err){
        console.log(err);
    }
});

//WRITE

fs.writeFile('byt.txt','Hello New File',err=>{
    if(err){
        console.log(err);
    }
});

