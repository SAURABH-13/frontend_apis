var mysql= require('mysql2');

//define connection string
var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'shoppingcart'
});

connection.connect(function(err){
    if(err) throw err;

});
module.exports=connection;