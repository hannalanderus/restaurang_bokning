<?php
header("content-type:application/json");

$connect = mysqli_connect("127.0.0.1", "root", "root", "restaurant");

if(!$connect){
    die('could not connect: ' . mysqli_connect_error());
}

$result = mysqli_query($connect, "SELECT * FROM bokning");

while($row = mysqli_fetch_assoc($result)){
    $output[]=$row;
}

print(json_encode($output, JSON_PRETTY_PRINT));
mysqli_close($connect);

?>