var express = require('express');
var router = express.Router();
const connection = require('../connection/connection');
router.get('/gallery', function(request, response) {
	connection.query('SELECT * FROM accounts', function(error, resulst, fields) {
		response.render("gallery", {users:resulst});
	;
})
});
module.exports = router;