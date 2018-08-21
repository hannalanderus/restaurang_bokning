<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("content-type:application/json");

$pdo = mysqli_connect("127.0.0.1", "root", "root", "restaurant");

$guestInformation = json_decode(file_get_contents('php://input'));
$array = json_decode(json_encode($guestInformation), True);

$name = $array['name'];
$email = $array['email'];
$phoneNumber = $array['phoneNumber'];

$statement = mysqli_query($pdo, "INSERT INTO person (`namn`, `epost`, `telefon`) 
	VALUES ('$name', '$email', '$phoneNumber')");


echo json_encode($array);
mysqli_close($pdo);
?>