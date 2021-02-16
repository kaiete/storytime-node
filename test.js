var storytime = {
  makeserver : function(portToHost) {
    const http = require('http');
    const fs = require('fs')

const hostname = '127.0.0.1'
const port = portToHost;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write('<h1 style="font-family: Courier;">Shhhh...</h1>');
  res.write(`<head><title>StoryTime | Node.js</title></head>`)
  res.write(`<p style="font-family: Courier;">You found a secret server, don't tell anyone!<br>This is StoryTime's node.js server - everything that goes on behind the scenes.</p>`)
  res.end(`<footer style="font-family: Helvetica, sans-serif; position: absolute; bottom: 5px; width: 100%; color: gray; font-style: italic;"><p>Thanks for supporting storytime,<br>The StoryTime team.</p></footer>`)
});

server.listen(port, hostname, () => {
  console.log(`TextWrite server running at http://${hostname}:${port}/`);
  setTimeout("server.close()",10000)
});
},
}
storytime.makeserver(1560)
//yes, this is copied from server.js
