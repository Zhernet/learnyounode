module.exports = function (dir, ext, callback) { 
  const fs = require('fs');
  const path = require('path');

  fs.readdir(dir, function (err, files) {
    if (err) {
      return callback(err);
    }

    let flist = [];
    for (let file of files) {
      if (path.extname(file) === ('.' + ext)) {
        flist.push(file);
      }
    };
    
    return callback(null, flist);
  });
}