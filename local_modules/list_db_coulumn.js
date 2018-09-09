var db_connection = require('./db_connector')
db_connection.connect();

exports.queryColumn = function(tablename, callback){
	var resultStr="";
    var strQuery = "select column_name from information_schema.columns where table_name='" + tablename + "'";
    db_connection.handler().query(strQuery, function(err, result) {
      if (err) console.log(err)
      var numRows = result.length;
      for (var i = 0; i<numRows; i++) {
        resultStr = resultStr + "," + result[i].column_name;
      }
      return callback(resultStr);
    });
};

