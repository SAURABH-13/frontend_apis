CREATE DEFINER=`root`@`localhost` PROCEDURE `Returned_order_details`(IN dd INt)
BEGIN
	UPDATE  Delivery SET Accept_Return=1 WHERE DeliveryId=dd and Status = 'Done';
END