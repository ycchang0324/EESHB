<?php

//這些header檔用來POST
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

//連線資料庫
require_once './db/db_connection.php';



//$data接收POST過來的函式
$data = json_decode(file_get_contents("php://input"));

$conn = connection();
$sql = "SELECT * FROM oldbook ";
$result = $conn->query($sql);
if($result->num_rows > 0){
    $orderList = $result -> fetch_all(MYSQLI_ASSOC);
    echo json_encode(["success"=>1,"orderList"=>$orderList],JSON_UNESCAPED_UNICODE,JSON_FORCE_OBJECT);
}
else{
    echo json_encode(["success"=>0]);
}
$conn->close();

?>