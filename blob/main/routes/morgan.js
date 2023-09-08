// morgan은 HTTP요청에 대한 로그를 관리하는 미들웨어

const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(morgan('combined'));

// create a write stream (in apppend mode)
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'access.log'),
  {
    flags: 'a',
  }
);

app.use(morgan('combined', { stream: accessLogStream }));

app.get('/', function (req, res) {
  res.send('hello, world!!!!');
});

app.listen(5158);
