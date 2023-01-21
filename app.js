// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


const express = require("express");
  
// Creates an express object
const app = express();
  
app.get("/", (req, res) => {
  
  res.send("<h1> Hello World </h1>");
});
  
app.listen(3000, () => {// servers starts to listen on 3000
    console.log("Listening to port 3000");
});
  