//http://localhost:8500/api/db/list?tablename=table1&k2=v2&k3=v3
var listCoumnModule = require('../local_modules/SumModule');
module.exports = function(app) {

  app.get('/api/sum',function(req,res){
    //console.log(req.query);
    //tablename=req.query.tablename;
    v1=req.query.v1;
    v2=req.query.v2;
    listCoumnModule.sum(v1,v2,function(result){
      res.json(result);
    });     
  });

}