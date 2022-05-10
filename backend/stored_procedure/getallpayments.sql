CREATE DEFINER=`root`@`localhost` PROCEDURE `get_allpayments_details`()
BEGIN
	Select * from  payment;
END