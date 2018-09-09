var db_connection = require('../local_modules/db_connector')
db_connection.connect();

//http://localhost:8500/api/db/list?tablename=table1

module.exports = function(app) {

  app.get('/api/db/list',function(req,res){
    //console.log(req.query);
    tablename=req.query.tablename;
    var resultStr="";
    var strQuery = "select column_name from information_schema.columns where table_name='" + tablename + "'";
    db_connection.handler().query(strQuery, function(err, result) {
      if (err) console.log(err)
      var numRows = result.length;
      for (var i = 0; i<numRows; i++) {
        resultStr = resultStr + "," + result[i].column_name;
      }
      res.json(resultStr + " : Total columns = "+numRows);
    });
    
  });

}