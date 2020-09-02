<?php
require_once './db/db_connection.php';


$conn = connection();

$sql = "SELECT * FROM bookorder WHERE id = 1";
$data = $conn -> query( $sql );
echo $data[0]["stdId"];


$conn -> close();



?>