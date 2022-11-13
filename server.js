const http = require('http');
const path = require('path');

const express = require('express');

// app
const app = express();
app.use(express.static(path.join(__dirname, 'docs'), {
  extensions: ['html'],
}));

// port
const port = 3003;
app.set('port', port);

// server
const server = http.createServer(app);
server.listen(port);

// on server error
server.on('error', (error) => {
  throw error;
});

// on server start
server.on('listening', () => {
  const port = server.address().port;
  const message = `Server started on port ${port}.`;
  console.log(message);
});
