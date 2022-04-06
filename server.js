const express = require('express');
const dotenv = require('dotenv').config();
const http = require('http');
const https = require('https');
const fs = require('fs');
const morgan = require('morgan');
const winston = require('./logger');

const environment = process.env.ENV;
const cert = process.env.CERT;
const key = process.env.KEY;
const port = process.env.PORT;

const boostrap = () => {
  let server;
  const app = express();

  morgan.token('localDate', function getDate(req) {
    let date = new Date();
    return date.toLocaleString();
  });
  morgan.format(
    'combined',
    ':remote-addr - :remote-user [:localDate] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'
  );
  app.use(morgan('combined', { stream: winston.stream }));

  if (environment !== 'production') {
    server = http.Server(app);
  } else {
    const options = {
      key: fs.readFileSync(key),
      cert: fs.readFileSync(cert),
    };
    server = https.createServer(options, app);
  }
  app.use(express.static(__dirname + '/dist'));
  server.listen(port, () =>
    winston.info(`[${new Date().toLocaleString()}] App running on port ${port}`)
  );
};

boostrap();
