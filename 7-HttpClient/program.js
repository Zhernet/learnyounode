const url = process.argv[2];
const http = require('http');

http.get(url, function(res) {
  res.setEncoding('utf8');
  res.on('data', function (data) {
    console.log(data);
  });
}).on('error', function(e) {
  console.log("error: " + e.message);
});
