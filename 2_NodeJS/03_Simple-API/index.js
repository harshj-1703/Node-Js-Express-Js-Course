const http = require("http"); // Handles REQUEST and RESPONSE in node.js
// const info = require('./export-import');

http.createServer((request, response) => {
    response.writeHead(200,{'Content-Type':'appliaction\json'});
    response.write(JSON.stringify({name:'Harsh',role:'SDE'}));
    response.end();
  }).listen(5000);