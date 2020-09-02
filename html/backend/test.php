<?php
require_once './db/db_connection.php';


$conn = connection();

$sql = "SELECT * FROM bookorder WHERE id = 1";
if($result = $conn -> query( $sql )){
 $row = $result->fetch_array();
    echo $row;
}



$conn -> close();



?>