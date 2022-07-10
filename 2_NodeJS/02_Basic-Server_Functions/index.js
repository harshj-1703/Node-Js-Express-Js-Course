const http = require("http"); // Handles REQUEST and RESPONSE in node.js

http.createServer((request, response) => {
    response.write("Hello World...!!!");
    response.end();
  }).listen(5000);

//Run with localhost:5000