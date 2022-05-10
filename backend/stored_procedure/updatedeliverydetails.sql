CREATE DEFINER=`root`@`localhost` PROCEDURE `update_delivery_details`(IN dd date,IN oid INT,IN St varchar(20),IN AR boolean,IN did INt )
BEGIN
	UPDATE  Delivery SET  DeliveryDate=dd,OrderId=oid,Status=St,Accept_Return=AR WHERE DeliveryId=did;
END