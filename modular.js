var filterdir = require('./modules/dir-module');

filterdir(process.argv[2], process.argv[3], function(err, files){
    if(!err)
	files.forEach(function(file){
	    console.log(file);
	})
});
