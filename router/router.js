'use strict';
module.exports = function(app) {
  var deliverycontroller = require('../controllers/deliverycontroller');
  var paymentcontroller = require('../controllers/paymentcontroller')

  app.route('/delivery')
     .get(deliverycontroller.getAll)
     .post(deliverycontroller.insert)
     
  app.route('/statuscount/:Status')   
     .get(deliverycontroller.getstatus);

  app.route('/statusdetails/:Status')   
      .get(deliverycontroller.getstatuswithdetails);
  
  app.route('/returnedorder/:returned')   
      .get(deliverycontroller.getByreturnedorder);
   
  app.route('/delivery/:deliveryId')
      .get(deliverycontroller.getbyid)
      .put(deliverycontroller.update)
      .delete(deliverycontroller.remove);

      ///////////    payment urls ////////////

  app.route('/payments')
    .get(paymentcontroller.getpayments)
    .post(paymentcontroller.insertpaymentdetails);
     
  app.route('/payments/:orderId')
      .get(paymentcontroller.getdetailsbyid)
      .put(paymentcontroller.updatepaymentdetails)
      .delete(paymentcontroller.removepayment);

  app.route('/paymentsvalues/:greatervalue')
    .get(paymentcontroller.getdetailsgreaterthan);
  
  app.route('/paymentsvaluessmaller/:smallervalue')
  .get(paymentcontroller.getdetailssmallerthan);
  };

  