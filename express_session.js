const express = require('express');
const session = require('express-session');
const fileStore = require('session-file-store')(session);
const app = express();

app.use(session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        secure: true,
        maxAge: 60000
    },
    store: new fileStore()
}));

app.listen(3000, () => {
    console.log("run 3000");
})

app.get('/', (req, res, next) => {
    console.log(req.session);
    res.send(req.session);
})

app.post('/login', (req, res, next) => {
    const {email, pw} = req.body.param;

    req.session.email = email;
    req.session.is_logined = true;
    req.session.save(err => {
        if (err) throw err;
        res.redirect('/home');
    })
});

app.post('/logout', (req,res,next) => {
    req.session.destroy();
    res.redirect('/login');
});