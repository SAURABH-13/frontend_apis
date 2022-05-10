
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
          sql.query("CALL payments_byorderid(?)", payments, function (err, res) {             
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
          sql.query("CALL get_allpayments_details", function (err, res) {
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
    sql.query("CALL payment_update(?,?,?,?,?)", [payments.paymentId,payments.paymentDate,payments.payment,payments.UPIMode,id], function (err, res) {
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
      sql.query("CALL delete_payments(?)", [orderId], function (err, res) {
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
  sql.query("CALL payments_greaterthan(?)", payments, function (err, res) {             
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
  sql.query("CALL payments_lessthan", payments, function (err, res) {             
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