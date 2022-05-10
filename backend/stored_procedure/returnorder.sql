CREATE DEFINER=`root`@`localhost` PROCEDURE `Accept_return`(IN ar boolean)
BEGIN
	Select * from Delivery where Accept_Return = ar and Status = 'Done';
END