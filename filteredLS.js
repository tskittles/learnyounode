var directoryName = process.argv[2];
var fileExtension = process.argv[3];

var fs = require('fs');

fs.readdir(directoryName, function(err, data){
    
    if(err) throw err;

    var filtered = data.filter( function(x){
        return x.slice(x.length - fileExtension.length, x.length) === fileExtension;
    });
    
    filtered.forEach(function (x){
        if(x.length > fileExtension.length){
            console.log(x);
        };
    });

});

