var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "sqluser",
    password: "password",
    database: "students"
});

con.connect(function(err) {
    if (err) throw err;
    var sql = "ALTER TABLE student ADD class VARCHAR (20)";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " table updated");
    });
});