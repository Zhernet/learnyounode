let fs = require('fs');
fs.readFile(process.argv[2], function (err, data) {
  if (err) {
    return console.log(err)
  }
  let nbLines = data.toString().split('\n').length-1; 
  console.log(nbLines);
});



