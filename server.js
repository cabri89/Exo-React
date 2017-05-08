var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'blog'
});

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router


app.get('/articles',function (req,res) {

	connection.query('SELECT * FROM articles', function (error, results, fields) {
		if (error) throw error;
		res.json(results);
	});
})


app.post('/sendMail', function(req, res, next) {
	var mailOptions = req.body;
	var transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'mail@gmail.com',
			pass: 'mdp'
		}
	});
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			return console.log(error);
			res.json({code:500,data:error});

		}
		console.log('Message %s sent: %s', info.messageId, info.response);
		res.json({code:200,data:info});
	});

});

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
