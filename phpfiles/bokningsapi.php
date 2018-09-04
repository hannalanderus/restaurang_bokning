<?php
require('database.php');

if(!$connect){
    die('could not connect: ' . mysqli_connect_error());
}

$currentDate = $_GET['date'];


$resultSitting = mysqli_query($connect, "SELECT * FROM bokning WHERE datum= '$currentDate'");


/*Global variable*/	
 $earlyBookings = 0;
 $lateBookings = 0; 
 $output = [];


/*Loops through bookings database filtering bookings*/
while($row = mysqli_fetch_assoc($resultSitting)){
    $output[] = $row;

    if($row["tid"] === '18:00:00') {
        $earlyBookings += 1;
    }
    else {
        $lateBookings += 1;
    }
}

$sittingsStatus = (object) [
    'bookings' => $output,
    'earlyBookings' => $earlyBookings,
    'lateBookings' => $lateBookings
  ];

print(json_encode($sittingsStatus, JSON_PRETTY_PRINT));
mysqli_close($connect);

?>