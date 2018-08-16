<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("content-type:application/json");

$connect = mysqli_connect("127.0.0.1", "root", "root", "restaurant");

if(!$connect){
    die('could not connect: ' . mysqli_connect_error());
}

$result = mysqli_query($connect, "SELECT * FROM person");

while($row = mysqli_fetch_assoc($result)){
    $output[]=$row;
}

print(json_encode($output, JSON_PRETTY_PRINT));
mysqli_close($connect);

?>