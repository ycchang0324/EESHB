<?php

//連線資料庫
require_once './db/db_connection.php';




//$category = "微積分";
$conn = connection();



$sql = "SELECT * FROM bookorder";

    
$result = $conn->query($sql);

$oldBookList = $result -> fetch_all(MYSQLI_ASSOC);
echo json_encode(["success"=>1,"oldBookList"=>$oldBookList],JSON_UNESCAPED_UNICODE,JSON_FORCE_OBJECT);


   
$conn->close();

?>

