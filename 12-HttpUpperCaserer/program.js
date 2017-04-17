const http = require('http')
const portNumber = process.argv[2]
const map = require('through2-map')

http.createServer((req, res) => {
  if (req.method !== 'POST') {
    return res.end('send me a POST\n')
  }
  req.pipe(map( (chunk) => {
    return chunk.toString().toUpperCase()
  })).pipe(res)
}).listen(portNumber)