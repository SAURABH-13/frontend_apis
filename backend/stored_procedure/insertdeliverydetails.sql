CREATE DEFINER=`root`@`localhost` PROCEDURE `insert_delivery_details`(IN id INt,IN datefield date,IN orderi INT,IN st varchar(20))
BEGIN
    insert into Delivery set DeliveryId = id, DeliveryDate = datefield, Orderid = orderi,Status = st; 
END