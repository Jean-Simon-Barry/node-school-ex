var path = require('path');
var fs = require('fs');
var dir = process.argv[2];
var ext = process.argv[3];

fs.readdir(dir, function(err, data){
    if(!err){
	data.forEach(function (file){
	    if(path.extname(file) === '.' + ext)
		console.log(file.toString());
	})
   }
})
