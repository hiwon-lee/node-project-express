const express = require('express');
require('dotenv').config({path:'mysql/.env'});
const mysql = require("./mysql"); // mysql 폴더의 index.js

const app = express();

app.use(express.json({
    limit: '50mb'
}));

app.listen(3000, () => {
    console.log("server started. port 3000");

});

app.get("/api/customers", async (req, res) => {
    const customers = await mysql.query('customerList');
    console.log("customers", customers);
    res.send(customers);
});

app.post('/api/customers/insert', async (req, res) => {
    console.log(req.body);
    const result = await mysql.query('customerInsert', req.body.param);
    res.send(result);
})