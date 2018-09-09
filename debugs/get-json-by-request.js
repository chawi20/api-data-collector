var request = require('request');
/*request('https://raw.githubusercontent.com/corysimmons/colors.json/master/colors.json', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});*/

var options = {
        url: 'https://raw.githubusercontent.com/corysimmons/colors.json/master/colors.json',
        method: 'GET',
        followAllRedirects: true,
        'auth': {
		    'user': 'sddas',
		    'pass': 'dsads',
		    'sendImmediately': false
		  },
        insecure: true
      };
      request(options, function (error, response, body) {
          if (error) console.log(error);
          if (!error && response.statusCode == 200) {
            var json = JSON.parse(body);
          	console.log(json.aliceblue);
          }
      });