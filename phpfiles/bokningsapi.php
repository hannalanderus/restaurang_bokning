<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("content-type:application/json");

$connect = mysqli_connect("127.0.0.1", "root", "root", "restaurant");

if(!$connect){
    die('could not connect: ' . mysqli_connect_error());
}

$currentDate = $_GET['date'];


$resultSitting = mysqli_query($connect, "SELECT * FROM bokning WHERE datum= '$currentDate'");


while($row = mysqli_fetch_assoc($resultSitting)){

	var_dump($row);
    $output[]=$row;
    if($row["tid"] == '18:00:00') {
    	echo 'hej';
    }
    else if($row["tid"] == '21:00:00') {
    	echo 'hejdå';
    }
}

print(json_encode($output, JSON_PRETTY_PRINT));
mysqli_close($connect);


?>