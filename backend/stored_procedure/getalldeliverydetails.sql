CREATE DEFINER=`root`@`localhost` PROCEDURE `get_all_delivery_details`()
BEGIN
	Select * from Delivery;
END