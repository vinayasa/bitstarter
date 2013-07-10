var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', 
	function(request, response) 
		{
			fs.readFileSync ("index.html",
					function (err, data)
						{
							if (err) 
							{	response.send ("Got an error.");
								throw err;
							}
							console.log (data);
			 				response.send(Buffer.tostring(data));
						}
					);
		}
	);

var port = process.env.PORT || 5000;
app.listen
	(port, 
	function()
		{
		  console.log("Listening on " + port);
		}
	);
