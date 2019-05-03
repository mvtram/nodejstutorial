const fs=require('fs');
const path=require('path');


//create folder
fs.mkdir(path.join(__dirname,'/test'),{},err => {
    if (err) {
        throw err;

        
    }
    console.log('folder created');
});

//write file
fs.writeFile(path.join(__dirname, '/test'), {}, err => {
    if (err) {
        throw err;


    }
    console.log('folder created');
});