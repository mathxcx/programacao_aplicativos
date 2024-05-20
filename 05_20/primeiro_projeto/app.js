//console.log("Segunda-Feira")

let http = require("http")

http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html"})
    res.end("Segunda-Feira")


}).listen(5000)

