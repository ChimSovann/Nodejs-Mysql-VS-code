var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "sqluser",
    password: "password",
    database: "students"
});

con.connect(function(err) {
    if (err) throw err;
    var sql = "DROP TABLE student";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Table deleted");
    });
});