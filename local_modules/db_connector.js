var mysql   = require('mysql');
var state = {
  pool: null,
}

exports.connect = function() {
  state.pool = mysql.createPool({
    connectionLimit : 100, //important
    host     : '192.168.43.216',
    user     : 'nodeadmin',
    password : 'password',
    database : 'nodejs-db',
    debug    :  false
  })
}

exports.handler = function() {
  return state.pool
}