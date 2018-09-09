

exports.sum = function(v1,v2, callback){
      var result = parseInt(v1)+parseInt(v2);
      
      return callback(result);
  
};

