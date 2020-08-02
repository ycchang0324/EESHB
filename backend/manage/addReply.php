<?php

//藥用POST方法前要用這些header檔
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

//需要連線資料庫的檔案
require '../db/db_connection.php';


// $conn為處理資料庫的變數
$conn = connection();
mysqli_query($conn,"SET NAMES 'utf8mb4'");

//$data變數接收前端傳過來的資料
$data = json_decode(file_get_contents("php://input"));
$id = $data -> id;
$reply = $data -> reply;

$id = 3;
$reply = "很棒棒";
//要求所有feedback裡的資料
$sql = "UPDATE feedback SET reply = '$reply' WHERE id = '$id'";

//$result為所有feedback的資料
$result = $conn->query($sql);


//結束資料庫連線
$conn->close();
?>