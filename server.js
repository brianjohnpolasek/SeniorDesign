var connect = require('connect');
var serverStatic = require('server-static');
connect().use(serverStatic(__dirname)).litsen(8000, function(){
	consol.log('Server running on 8000');
});
