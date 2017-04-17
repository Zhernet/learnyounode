const url1 = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];

const http = require('http');
const bl = require('bl');

let urlsData = [];
let count = 0;

function printUrlsData() {
  for (let data of urlsData) {
    console.log(data);
  }
};

function httpGet(url, index) {
  http.get(url, function(res) {
    res.pipe(bl(function(err, data) {
      if (err) {
        return console.error("error: " + err);
      }
      urlsData[index] = data.toString();
      count++;
      if (count ===3) {
        printUrlsData();
      }
    }));
  }); 
}

httpGet(url1, 0);
httpGet(url2, 1);
httpGet(url3, 2);


  
  
