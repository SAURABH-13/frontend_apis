const express = require('express');
var path=require('path');
var cors = require('cors')
var app = express();


app.use(cors())
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

var routes = require('./router/router'); //importing route
routes(app); //register the route

var onListen=function(){
  console.log("server is listening on port ")
}
app.listen(3000,onListen);
console.log("Server is listening on port 3000");