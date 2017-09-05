var fs = require('fs');
var output = fs.readFileSync(process.argv[2])
var newLines = output.toString().split('\n').length - 1;
console.log(newLines);