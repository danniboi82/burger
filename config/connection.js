// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "@l6slz5o3eduzatkw.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306",
  user: "pj1vzlul0ukljtp5",
  password: "qchr8bkqzsjxowbh",
  database: "ji9is1hwx9117wyu"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
