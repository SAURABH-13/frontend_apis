CREATE DEFINER=`root`@`localhost` PROCEDURE `payments_byorderid`(IN od INT)
BEGIN
	Select * from payments where orderId= od;
END