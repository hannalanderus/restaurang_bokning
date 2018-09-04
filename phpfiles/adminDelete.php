<?php
require('database.php');

$guestInformation = json_decode(file_get_contents('php://input'));
$array = json_decode(json_encode($guestInformation), True);

echo var_dump($array);

$id = $array['id'];


$DeleteBooking = mysqli_query($connect, "DELETE FROM bokning WHERE id = '$id'");

mysqli_close($connect);

?>