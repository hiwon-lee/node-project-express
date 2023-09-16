const mysql = require('mysql');
const sql = require('./sql.js')
const connection  = mysql.createConnection({
    connectLimit : 10,
    host : '127.0.0.1',
    port : 3306,
    user : 'heewon',
    password : '1234',
    database : 'dev'
});

connection.connect();

// var sql = 'select * from customers'
connection.query(sql.customerList, function(err, rows, fields)
{
    if (err) {
        console.error('error connecting: ' + err.stack);
    }
    console.log(rows);
        
});
connection.end(); // 연결 해제

const pool = mysql.createPool({ //pool 생성
    connectLimit : process.env.MYSQL_LIMIT,
    host :  process.env.MYSQL_HOST,
    port :  process.env.MYSQL_PORT,
    user :  process.env.MYSQL_USERNAME,
    password :  process.env.MYSQL_PASSWORD,
    database :  process.env.MYSQL_DB
})

const query = async (alias, values) => {
    return new Promise((resolve, reject) => {
         pool.query(sql[alias], values, (error, results) => {
            if (error) {
                console.log(error);
                reject({
                    error
                });
            } else resolve(results);
        });
    });
}

module.exports = {
    query
};