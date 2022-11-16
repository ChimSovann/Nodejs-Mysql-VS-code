var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "sqluser",
    password: "password",
    database: "students"
});

con.connect(function(err) {
    if (err) throw err;
    var sql = "DELETE FROM student WHERE rollno = 1 ";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Number of records deleted: " + result.affectedRows);
    });
});