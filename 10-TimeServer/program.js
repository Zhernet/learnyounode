const net = require('net');
const portNumber = process.argv[2];

function zeroFill(value) {
  return (value < 10 ? '0' : '') + value;
}

function getFormattedDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = zeroFill(date.getMonth() + 1);
  const day = zeroFill(date.getDate());
  const hour = zeroFill(date.getHours());
  const min = zeroFill(date.getMinutes());
  return year + '-' + month + '-' + day + ' ' + hour + ':' + min;
}

const server = net.createServer(function(socket) {
  socket.write(getFormattedDate() + '\n');
  socket.end();
});

server.listen(portNumber);