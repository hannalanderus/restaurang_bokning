<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("content-type:application/json");

$pdo = mysqli_connect("127.0.0.1", "root", "root", "restaurant");

$guestInformation = json_decode(file_get_contents('php://input'));
$array = json_decode(json_encode($guestInformation), True);

$name = $array['name'];
$email = $array['email'];
$phoneNumber = $array['phoneNumber'];
$date = $array['startDate'];
$time = $array['time'];
$numberofGuests = $array['guests'];


echo json_encode(var_dump($array));

$statementPerson = mysqli_query($pdo, "INSERT INTO person (`namn`, `epost`, `telefon`) 
	VALUES ('$name', '$email', '$phoneNumber')");


$person_id = mysqli_insert_id($pdo);


$statementBooking = mysqli_query($pdo, "INSERT INTO bokning (`datum`, `tid`, `antal_personer`, `person_id`) 
VALUES ('$date', '$time', '$numberofGuests', '$person_id')");


mysqli_close($pdo);
?>