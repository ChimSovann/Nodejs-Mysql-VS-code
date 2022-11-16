const express = require("express")
const mysql = require('mysql');



var con = mysql.createConnection({
    host: "localhost",
    user: "sqluser",
    password: "password",
    database: "students"
});

con.connect(function(err) {
    if (err) {
        console.log(err)
    } else {
        var sql = "CREATE TABLE student ( rollno INTEGER, name VARCHAR(20), branch VARCHAR(20))";
        con.query(sql, (err, result) => {
            if (err) {
                console.log(err)
            } else {
                console.log("Table created");
            }
        })
    }
})