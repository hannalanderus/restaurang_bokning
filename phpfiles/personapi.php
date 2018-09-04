<?php
require('database.php');

if(!$connect){
    die('could not connect: ' . mysqli_connect_error());
}

$result = mysqli_query($connect, "SELECT * FROM person INNER JOIN bokning 
	ON person.id = bokning.person_id ORDER BY datum ASC");

while($row = mysqli_fetch_assoc($result)){
    $output[]=$row;
}

print(json_encode($output, JSON_PRETTY_PRINT));
mysqli_close($connect);

?>