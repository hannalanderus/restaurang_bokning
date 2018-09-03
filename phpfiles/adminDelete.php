<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("content-type:application/json");

$connect = mysqli_connect("127.0.0.1", "root", "root", "restaurant");

$guestInformation = json_decode(file_get_contents('php://input'));
$array = json_decode(json_encode($guestInformation), True);

echo var_dump($array);

$id = $array['id'];


$DeleteBooking = mysqli_query($connect, "DELETE FROM bokning WHERE id = '$id'");

mysqli_close($connect);

?>