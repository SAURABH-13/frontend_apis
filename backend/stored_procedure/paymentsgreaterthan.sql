CREATE DEFINER=`root`@`localhost` PROCEDURE `payments_greaterthan`(IN pp INT)
BEGIN
	SELECT * FROM shoppingcart.payments where payment > pp;
END