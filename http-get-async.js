var http = require('http');
//TODO: use pipe & bl module & a loop instead of multi calls across 3 callbacks. Otherwise it just seems like useless copy-paste code.

http.get(process.argv[2], function(response){
    response.setEncoding('utf8');
    var list = "";
    response.on("data", function(data){
	list +=data;
	});
    response.on("end", function(data){
	console.log(list);
	list = "";
	http.get(process.argv[3], function(response){
	    response.setEncoding('utf8');
	    var list = "";
	    response.on("data", function(data){
		list +=data;
	    });
	    response.on("end", function(data){
		console.log(list);
		list = "";
		http.get(process.argv[4], function(response){
		    response.on("data", function(data){
			list +=data;
		    });
		    response.on("end", function(data){
			console.log(list);
		    });//response 3 end
		});//third get
	});//response 2 end
      });//second get
    });//response 1 end
});//first get
