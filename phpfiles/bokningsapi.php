<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("content-type:application/json");

$connect = mysqli_connect("127.0.0.1", "root", "root", "restaurant");

if(!$connect){
    die('could not connect: ' . mysqli_connect_error());
}

$currentDate = $_GET['date'];


$resultSitting = mysqli_query($connect, "SELECT * FROM bokning WHERE datum= '$currentDate'");

/*Global variable*/	
 $earlyBookings = 0;
 $lateBookings = 0;
 //$output = array();

/*Loops through bookings database filtering bookings*/
while($row = mysqli_fetch_assoc($resultSitting)){
    $output[] = $row;

    //var_dump($row);

    if($row["tid"] == '18:00:00') {
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

//var_dump($earlyBookings);
//echo $earlyBookings;


print(json_encode($sittingsStatus, JSON_PRETTY_PRINT));
mysqli_close($connect);

?>