//http://localhost:8500/api/db/list?tablename=table1&k2=v2&k3=v3
var listCoumnModule = require('../local_modules/list_db_coulumn');
module.exports = function(app) {

  app.get('/api/db/list',function(req,res){
    //console.log(req.query);
    tablename=req.query.tablename;
    listCoumnModule.queryColumn(tablename,function(result){
      res.json(result);
    });     
  });

}