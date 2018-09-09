var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '192.168.43.216',
  user     : 'nodeadmin',
  password : 'password',
  database : 'nodejs-db'
});
 
connection.connect();
 
connection.query('SELECT * from table1', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].name);
});
 
connection.end();