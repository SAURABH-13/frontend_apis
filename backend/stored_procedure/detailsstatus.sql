CREATE DEFINER=`root`@`localhost` PROCEDURE `Details_status`(IN st varchar(20))
BEGIN
	SELECT * FROM shoppingcart.Delivery where Status = st;
END