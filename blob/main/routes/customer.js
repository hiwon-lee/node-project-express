const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  res.send('customer 라우트 루트');
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
