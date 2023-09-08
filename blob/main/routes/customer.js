const express = require('express');
const router = express.Router();

router.post('/', function (req, res) {
  // res.send('customer 라우트 루트');
  console.log(req.body.param);
  res.send(req.body.param);

  // 실행방법
  // 1. node app.js
  // 2. postman에서 post로 json파일을 생성하고 3000호출
});

router.post('/insert', function (req, res) {
  res.send('/customer/insert 라우트');
});

router.put('/update', function (req, res) {
  res.send('/customer/udate 라우트');
});

router.delete('/delete', function (req, res) {
  res.send('/customer/delete 라우트');
});

module.exports = router;
