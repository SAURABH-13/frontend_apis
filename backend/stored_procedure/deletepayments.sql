CREATE DEFINER=`root`@`localhost` PROCEDURE `delete_payments`(IN od INT)
BEGIN
	DELETE FROM payments WHERE orderId= od;
END