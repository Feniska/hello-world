const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const express = require("express")
const app = express()
const server = http.createServer(function(req,res) {

app.get("/",(req,res) => res.send("Hello "))

app.get("/?name=:id",function(req,res) {
    res.send("Hello " + req.params.id);
    
})

app.listen(3000)


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/?name=`);
});