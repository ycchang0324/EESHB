<?php


//連線資料庫
require_once './db/db_connection.php';


$conn = connection();
$sql = "SELECT * FROM trancation ";
$result = $conn->query($sql);
$money = 0;
while( $row = $result->fetch_assoc() ){
    if( $row["IO"] == "I" )
        echo $row["price"] . "<br>";
    
    if( $row["IO"] == "O" )
        echo $row["price"] . "<br>";
}

echo "總金額是 " . $money . " 元."; 
$conn->close();

?>