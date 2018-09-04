<?php
require('database.php');

$guestInformation = json_decode(file_get_contents('php://input'));
$array = json_decode(json_encode($guestInformation), True);

$name = $array['name'];
$email = $array['email'];
$phoneNumber = $array['phoneNumber'];
$person_id = $array['guestId'];

$guests = $array['guests'];
$date = $array['startDate'];
$time = $array['time'];
$bookingID = $array['bookingId'];

echo json_encode(var_dump($array));


$UpdatePersonOnBooking = mysqli_query($connect, "UPDATE person
 SET id='$person_id', namn = '$name', epost = '$email', telefon = '$phoneNumber'
 WHERE id = '$person_id' ");


$UpdateBooking = mysqli_query($connect, "UPDATE bokning
 SET id='$bookingID', datum = '$date', tid = '$time', antal_personer = '$guests'
 WHERE id = '$bookingID' ");


mysqli_close($connect);

?>