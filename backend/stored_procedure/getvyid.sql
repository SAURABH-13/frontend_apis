CREATE PROCEDURE getbyid_(IN id INT)
BEGIN
    Select * from Delivery where DeliveryId = id;
END
INSERT INTO  Delivery set ?