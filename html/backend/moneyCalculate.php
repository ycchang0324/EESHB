<?php


//連線資料庫
require_once './db/db_connection.php';


$conn = connection();

$money = 0;

$sql = "SELECT * FROM trancation WHERE IO = 'I'";
$result = $conn->query($sql);

while( $row = $result->fetch_assoc() )
    $money += $row["ammount"];

$sql = "SELECT * FROM trancation WHERE IO = 'O'";
$result = $conn->query($sql);

while( $row = $result->fetch_assoc() )
    $money -= $row["ammount"];

echo "總金額是 " . $money . " 元."; 
$conn->close();

?>