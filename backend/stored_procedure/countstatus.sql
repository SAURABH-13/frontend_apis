CREATE DEFINER=`root`@`localhost` PROCEDURE `Count_status`(IN st varchar(20))
BEGIN
	select count(Status) as StatusCount from Delivery where Status = st;
END