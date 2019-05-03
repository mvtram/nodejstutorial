const path = require('path');


//base name
console.log(path.basename(__filename));
//directory name
console.log(path.dirname(__filename));
//file extension
console.log(path.extname(__filename));
//create path object
console.log(path.parse(__filename));
//concate paths
console.log(path.join(__dirname,'test','hello.html'));

