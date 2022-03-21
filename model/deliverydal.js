'user strict';
var sql = require('./databasesetting');

var Task = function(Delivery){
  this.DeliveryId=Delivery.DeliveryId;
  this.DeliveryDate=Delivery.DeliveryDate
  this.OrderId=Delivery.OrderId
  this.Status = Delivery.Status;
  this.Accept_Return = Delivery.Accept_Return;
}

    
// inserting all delivery details 

Task.newdeliverydetails = function (newTask, result) {    
  sql.query("INSERT INTO  Delivery set ?", newTask, function (err, res) {
          if(err) {
            console.log("error: ", err);
            result(err, null);
          }
          else{
            console.log(res.insertId);
            result(null, res.insertId);
          }
      });           
};

// getting all delivery details for particular id
Task.getdeliverybyid = function (DeliveryId, result) {
        sql.query("Select * from Delivery where DeliveryId = ?", DeliveryId, function (err, res) {             
                if(err) {
                  console.log("error: ", err);
                  result(err, null);
                }
                else{
                  result(null, res);     
                }
            });   
};

//getting all delivery details 

Task.getAlldeliverydetails = function (result) {
        sql.query("Select * from Delivery", function (err, res) {
                if(err) {
                  console.log("error: ", err);
                  result(null, err);
                }
                else{
                  console.log('delivery : ', res);  
                  result(null, res);
                }
            });   
};

//update any field from delivery on id
Task.updatedeliverybyid = function(id ,Delivery, result){
  sql.query("UPDATE  Delivery SET  DeliveryDate=?,OrderId=?,Status=?,Accept_Return=? WHERE DeliveryId=?", [Delivery.DeliveryDate,Delivery.OrderId,Delivery.Status,Delivery.Accept_Return,id], function (err, res) {
          if(err) {
                console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null,res);
            }
    }); 
};



// delete delivery entry

Task.remove = function(deliveryId, result){
    sql.query("DELETE FROM Delivery WHERE DeliveryId= ?", [deliveryId], function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                    result(null, res);
                }
            }); 
};

// getting count of status for done and pending
Task.getstatuscount = function (Status, result) {
  sql.query("select count(Status) as StatusCount from Delivery where Status = ?", Status, function (err, res) {             
          if(err) {
            console.log("error: ", err);
            result(err, null);
          }
          else{
            result(null, res);     
          }
      });   
};

//getting status details for done and pending
Task.getstatusDetails = function (Status, result) {
  sql.query("SELECT * FROM shoppingcart.Delivery where Status = ?", Status, function (err, res) {             
          if(err) {
            console.log("error: ", err);
            result(err, null);
          }
          else{
            result(null, res);     
          }
      });   
};

// getting return order details 
Task.getreturndetails = function (Accept_Return, result) {
  sql.query("Select * from Delivery where Accept_Return = ?",Accept_Return, function (err, res) {             
          if(err) {
            console.log("error: ", err);
            result(err, null);
          }
          else{
            result(null, res);     
          }
      });   
};







module.exports= Task;



