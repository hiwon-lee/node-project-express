// 추가 HTTP헤더를 사용해 도메인또는 포트가 다른 서버의 자원에 접근할 수 있는 권한을 부여하도록 브라우저에 알려주는 체제
// 권한이 있는 클라이언트만 접근할 수 있도록 접근 권한을 부여하는 미들웨어
const express = require('express');
const cors = require('cors');
const app = express();

const corsOptions = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.get('/products/:id', function(req, res, next) {
    res.json({msg: 'This is cors-enabled for all origins'})
})

app.listen(80, function() {
    console.log('cors-enabled web server listening on port 80');
})