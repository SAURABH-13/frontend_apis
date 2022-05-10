CREATE DEFINER=`root`@`localhost` PROCEDURE `payment_update`(IN pi INT ,IN pd Date ,IN py INT , IN upi varchar(20),IN odd INT )
BEGIN
	UPDATE   payments SET    paymentId=pi,paymentDate=pd,payment=py,UPIMode=upi WHERE orderId=odd;
END