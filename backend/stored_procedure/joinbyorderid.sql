CREATE DEFINER=`root`@`localhost` PROCEDURE `join_on_orderid`()
BEGIN
	select payments.paymentId ,payments.paymentDate,payments.payment,payments.UPIMode,Delivery.DeliveryId,Delivery.DeliveryDate,Delivery.Status,Delivery.Accept_Return from payments INNER JOIN Delivery on payments.orderId=Delivery.OrderId;
END