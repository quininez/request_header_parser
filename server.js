var express = require("express");
var useragent = require("useragent");
var app = express();

app.get('/api/whoami', function(req,res){
    
    var languages = req.headers['accept-language'];
    var prefLanguage = languages.substr(0,languages.search(/[,]/));
    var os = useragent.parse(req.headers['user-agent']).os;
    
    var result = {
        ipadress: req.headers['x-forwarded-for'],
        language: prefLanguage,
        software: os.family
    }
    res.end(JSON.stringify(result));
});

app.listen(process.env.PORT || 8080);