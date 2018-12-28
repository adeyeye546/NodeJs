var fs = require('fs');

var readme = fs.readFileSync('readme.txt', 'utf16');

console.log(readme);
