const dir = process.argv[2];
const ext = process.argv[3];
const mymodule = require('./mymodule.js');

mymodule(dir, ext, function(err, files){
  if (err) {    
    return console.log("Error: ", err);
  }
  for (let file of files) {
    console.log(file);
  }
});
