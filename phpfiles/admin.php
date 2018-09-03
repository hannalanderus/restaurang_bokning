<?php
header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
header("Access-Control-Allow-Origin: http://localhost:3000");
header("content-type:application/json");

$connect = mysqli_connect("127.0.0.1", "root", "root", "restaurant");
$guestInformation = json_decode(file_get_contents('php://input'));
$array = json_decode(json_encode($guestInformation), True);

$name = $array['name'];
$email = $array['email'];
$phoneNumber = $array['phoneNumber'];
$guestID = $array['guestId'];

$guests = $array['guests'];
$date = $array['startDate'];
$time = $array['time'];
$bookingID = $array['bookingId'];

$bookingId = $_GET['bookingID'];



$DeleteBooking = mysqli_query($connect, "DELETE FROM bokning WHERE id = '$bookingId'");


$UpdatePersonOnBooking = mysqli_query($connect, "UPDATE FROM person
 SET namn = '$name', epost = '$email', telefon = '$phoneNumber'
 WHERE id = '$guestID' ")


$UpdateBooking = mysqli_query($connect, "UPDATE FROM bokning
 SET datum = '$date', tid = '$time', antal_personer = '$guests'
 WHERE id = '$bookingID' ")


mysqli_close($connect);

?>