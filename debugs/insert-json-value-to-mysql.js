var request = require('request');
var mysql   = require('./mysql-connector-module');
mysql.connect();

var options = {
  url: 'https://raw.githubusercontent.com/corysimmons/colors.json/master/colors.json',
  method: 'GET',
  followAllRedirects: true,
  insecure: true
};
request(options, function (error, response, body) {
    if (error) console.log(error);
    if (!error && response.statusCode == 200) {

    	console.log(body);
      var json = JSON.parse(body);
      mysql.handler().query("INSERT INTO table1 (name) VALUES('"+json.aliceblue+"')", function(err, result) {
        if (err) {
            console.log(err)
        }else{
           console.log('OK');
        }
      });
    
    }
});