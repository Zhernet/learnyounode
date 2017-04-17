const http = require('http')
const url = require('url')
const portNumber = process.argv[2]

function dateToJsonAsHourMnSec(res, date) {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.write(
    JSON.stringify({
      'hour' : date.getHours(),
      'minute' : date.getMinutes(),
      'second' : date.getSeconds()
    })
  );
  res.end()
}

function dateToJsonAsUnixtime(res, date) {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.write(
    JSON.stringify({
      'unixtime' : date.getTime()
    })
  );
  res.end()
}

const server = http.createServer( (req, res) => {   
  let pathname = url.parse(req.url, true).pathname
  let iso = url.parse(req.url, true).query.iso
  let date = new Date(Date.parse(iso))

  if (pathname === '/api/parsetime') {
    dateToJsonAsHourMnSec(res, date)
  } else if (pathname === '/api/unixtime') {
    dateToJsonAsUnixtime(res, date)
  }
})
server.listen(portNumber)
