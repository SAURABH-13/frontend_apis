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
  try{ 
  sql.query("CALL insert_delivery_details(?)", newTask, function (err, res) {
          if(err) {
            console.log("error: ", err);
            result(err, null);
          }
          else{
            console.log(res.insertId);
            result(null, res.insertId);
          }
      }); }
    catch(err){
      console.log("Data not Inserted")
    }          
};

// getting all delivery details for particular id
Task.getdeliverybyid = function (DeliveryId, result) {
  try{
    sql.query("CALL getbyid_(?)", DeliveryId, function (err, res) {             
      if(err) {
        console.log("error: ", err);
        result(err, null);
      }
      else{
        result(null, res);     
      }
  }); 
  }
    catch(err){
        console.log("Data not fetched")
    }    
          

};


//getting all delivery details 

Task.getAlldeliverydetails = function (result) {
  try{
        sql.query("CALL get_all_delivery_details", function (err, res) {
                if(err) {
                  console.log("error: ", err);
                  result(null, err);
                }
                else{
                  console.log('delivery : ', res);  
                  result(null, res);
                }
            }); }
    catch(err){
      console.log("Data not fetched")
    }  
};

// update any field from delivery on id
Task.updatedeliverybyid = function(id ,Delivery, result){
  sql.query("CALL update_delivery_details(?,?,?,?,?)", [Delivery.DeliveryDate,Delivery.OrderId,Delivery.Status,Delivery.Accept_Return,id], function (err, res) {
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
    sql.query("CALL delete_delivery_details(?) ", [deliveryId], function (err, res) {
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
  sql.query("CALL Count_status(?)", Status, function (err, res) {             
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
  sql.query("CALL Details_status(?)", Status, function (err, res) {             
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
  sql.query("CALL Accept_return(?)",Accept_Return, function (err, res) {             
          if(err) {
            console.log("error: ", err);
            result(err, null);
          }
          else{
            result(null, res);     
          }
      });   
};


//update when customer returns the order
Task.Returnorder = function(id , result){
  sql.query("CALL Returned_order_details(?)", id, function (err, res) {
          if(err) {
                console.log("error: ", err);
                result(null, err);
             }
           else{   
                result(null,res);
            }
    }); 
};

  Task.getbyjoin=function(result){
    sql.query("CALL join_on_orderid",function (err, res) {
        
      if(err) {
            console.log("error: ", err);
            result(null, err);
          }
          else{
            result(null, res);
              }
          }); 
    }


  



module.exports= Task;



