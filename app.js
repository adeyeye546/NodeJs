var fs = require('fs');

var readme = fs.readFileSync('readme.txt', 'utf16');

fs.writeFileSync('writeMe.txt', 'readme');
