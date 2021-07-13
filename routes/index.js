var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',    // 호스트 주소
  user: 'woasidh',           // mysql user
  password: '1234',       // mysql password
  database: 'mbti'         // mysql 데이터베이스
});

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('hi back');
});

router.get('/sql', function (req, res, next) {
  connection.connect();
  connection.query('SELECT * FROM result',
    function (error, results, fields) {
      if (error) throw error;
      console.log(results);
    });
  connection.end();
  res.send('sql_connected');
});

module.exports = router;
