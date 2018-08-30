<?php
header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
header("Access-Control-Allow-Origin: http://localhost:3000");
header("content-type:application/json");

$connect = mysqli_connect("127.0.0.1", "root", "root", "restaurant");

$bookingId = $_GET['bookingID'];

$DeleteBooking = mysqli_query($connect, "DELETE FROM bokning WHERE id = '$bookingId'");

print(json_encode($bookingID, JSON_PRETTY_PRINT));
mysqli_close($connect);

?>