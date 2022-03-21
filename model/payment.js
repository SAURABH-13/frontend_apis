
var sql = require('./databasesetting');


var pay= function(payments){
    this.paymentId = payments.paymentId;
    this.paymentDate=payments.paymentDate;
    this.orderId=payments.orderId;
    this.payment = payments.payment;
    this.UPIMode =payments.UPIMode;
  }

  // inserting  all the payment  details
  pay.createpaymentdetails = function (newTask, result) {    
    sql.query("INSERT INTO payments  set ?", newTask, function (err, res) {
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
  
  //getting particular payment details using id
  pay.getpaymentbyid = function (payments, result) {
          sql.query("Select * from payments where orderId= ? ", payments, function (err, res) {             
                  if(err) {
                    console.log("error: ", err);
                    result(err, null);
                  }
                  else{
                    result(null, res);     
                  }
              });   
  };
  
 // getting all payment details
  pay.getallpayments = function (result) {
          sql.query("Select * from  payments", function (err, res) {
                  if(err) {
                    console.log("error: ", err);
                    result(null, err);
                  }
                  else{
                    console.log('payments:', res);  
                    result(null, res);
                  }
              });   
  };
  // update any details  
  pay.updateById1 = function(id ,payments, result){
    sql.query("UPDATE   payments SET    paymentId=?,paymentDate=?,payment=?,UPIMode=? WHERE orderId=?", [payments.paymentId,payments.paymentDate,payments.payment,payments.UPIMode,id], function (err, res) {
            if(err) {
                  console.log("error: ", err);
                  result(null, err);
               }
             else{   
               result(null,res);
              }
      }); 
  };
  
  
  
  // delete data from table
  
  pay.remove1 = function(orderId, result){
      sql.query("DELETE FROM payments WHERE orderId= ?", [orderId], function (err, res) {
                  if(err) {
                      console.log("error: ", err);
                      result(null, err);
                  }
                  else{
                      result(null, res);
                  }
              }); 
  };
  
//getting details for amount greater than
pay.getpaymentgreaterthan = function (payments, result) {
  sql.query("SELECT * FROM shoppingcart.payments where payment > ?", payments, function (err, res) {             
          if(err) {
            console.log("error: ", err);
            result(err, null);
          }
          else{
            result(null, res);     
          }
      });   
};

//getting details for payment less than
pay.getpaymentsmallerthan = function (payments, result) {
  sql.query("SELECT * FROM shoppingcart.payments where payment < ?", payments, function (err, res) {             
          if(err) {
            console.log("error: ", err);
            result(err, null);
          }
          else{
            result(null, res);     
          }
      });   
};



  module.exports= pay;