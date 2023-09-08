const express = require('express');
const customerRoute = require('./routes/customer'); //customer route추가
const productRoute = require('./routes/product'); // product route 추가
const app = express();
const port = 3000; // port번호

// app.listen() 함수를 사용해서 서버 실행
// 클라이언트는 'host:port'로 노드 서버에 요청을 보낼 수 있음
app.use(
  express.json({
    limit: '50mb',
  })
);

app.listen(port, () => {
  console.log(`서버가 실행된다. http://localhost:${port}`);
});

// client에서 HTTP요청 메소드 중 GET을 이용해 'host:port'로 요청 보내면 실행되는 라우트
app.get('/', (req, res) => {
  res.send('Hello world');
});

app.use('/customer', customerRoute);
app.use('/product', productRoute);

app.use(express.static('public')); // 정적 파일 가져올 수있다는데,, 왜 안되냐구ㅠ

// app
//   .route('/customer')
//   .get(function (req, res) {
//     res.send('search info');
//   })
//   .post(function (req, res) {
//     res.send('add');
//   })
//   .put(function (req, res) {
//     res.send('modify');
//   })
//   .delete(function (req, res) {
//     res.send('delete');
//   });

// app.get('/customer', function (req, res) {
//   res.send('get 요청에 대한 응답');
// });

// app.use('/customer', customerRoute);

app.get('/ab?cd', function (req, res) {
  console.log('ab?Cd');
  res.send('ab?cd');
});

app.get('./ab+cd', function (req, res) {
  res.send('ab+cd');
});

// app.get(/a/, function (req, res) {
//   res.send('/a/');
// });

app.get('/contact', function (req, res) {
  res.send('contact');
});

// app.get(
//   '/example',
//   function (req, res, next) {
//     console.log('첫 번째 콜백 함수');
//     next(); ///다음 콜백함수
//   },
//   function (req, res) {
//     res.send('두 번째 콜백 함수');
//   }
// );

// const ex0 = function (req, res, next) {
//   console.log('1st');
//   next();
// };
// const ex1 = function (req, res, next) {
//   console.log('2nd');
//   next();
// };

// const ex2 = function (req, res, next) {
//   res.send('3nd');
// };

// app.get('/example', [ex0, ex1, ex2]);
