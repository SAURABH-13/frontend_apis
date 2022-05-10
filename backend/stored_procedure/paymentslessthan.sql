CREATE DEFINER=`root`@`localhost` PROCEDURE `payments_lessthan`(IN pd INT)
BEGIN
	SELECT * FROM shoppingcart.payments where payment < pd;
END