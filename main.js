process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var server = require('http').createServer(app);

/*app.set('views', __dirname + '/views');
app.use("/vendors", express.static(__dirname + '/views/vendors'));
app.use("/build", express.static(__dirname + '/views/build'));
app.use("/images", express.static(__dirname + '/views/production/images'));
app.engine('html', require('ejs').renderFile);

app.use(session({
	secret: 'GrtgtzysWs2W38',
    proxy: true,
    resave: true,
    saveUninitialized: true,
    cookie: { path: '/', httpOnly: true, secure: false, maxAge: 86400000 } // Session TTL 24 Hrs.
    }));*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//var sess;

// Routes -----------------------------------------------------------------------------
require('./routes/route_db_column_list')(app);;
// ------------------------------------------------------------------------------------

// Start Openshift CICD Console ---------------------------------------------------------------
server.listen(8500,function(){
    console.log("Application Started on PORT 8500");
});