'use strict';

// TODO: Write the homework code in this file

const http = require('http');
const PORT = 8080;
let state = 10;

const server = http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/html"});
  
  switch(req.url) {

    case '/state':
      state;
      res.write(`<h2>the current state ${state}</h2>`)
      break;
  
    case '/add':
      state++;
      res.write(`<h2>adding state + 1. Current statte: ${state}</h2>`)
      break;
    
    case '/subtract':
      state--;
      res.write(`<h2>subtracting state - 1. Current statte: ${state}</h2>`)
      break;
  
    case '/reset':
      state = 10;
      res.write(`<h2>Reset state to default: ${state}</h2>`)
      break;
  
    default:
      res.writeHead(404, {"Content-Type": "text/html"});
      res.write(`<h2>code 404: page not found</h2>`)
      break;
  }
  res.end();
}).listen(PORT, console.log(`listening port: ${PORT}`));