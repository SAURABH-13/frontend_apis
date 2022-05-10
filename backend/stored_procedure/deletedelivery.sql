CREATE DEFINER=`root`@`localhost` PROCEDURE `delete_delivery_details`(IN id INT)
BEGIN
	DELETE FROM Delivery WHERE DeliveryId = id;
END