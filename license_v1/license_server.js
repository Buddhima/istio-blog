const http = require('http');

const requestListener = function (req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  const responseBody = { 
"year": "2020",
"result" : "issued"
};
  res.write(JSON.stringify(responseBody));
  res.end();
}

const server = http.createServer(requestListener);
server.listen(8080);