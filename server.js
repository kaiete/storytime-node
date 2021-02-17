var storytime = {
  makeserver : function(portToHost) {
    const http = require('http');
    const fs = require('fs')

const hostname = 'localhost'
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
  console.log(`StoryTime server running at http://${hostname}:${port}/`);
  console.warn("StoryTime uses this only for server side technologies / POST requests")
});
},
}
storytime.makeserver(80)
storytime.makeserver(443)
//yes, this is copied from textwrite's tw.js
