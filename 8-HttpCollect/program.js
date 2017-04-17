const url = process.argv[2];
const http = require('http');
const bl = require('bl'); //Buffer list collector, reader and streamer thingy.

http.get(url, function (res) {
  res.pipe(bl(function (err, data) {
    if (err) {
      return console.error("error: " + err);
    }
    data = data.toString();
    console.log(data.length);
    console.log(data);
  }));
});

  
  
