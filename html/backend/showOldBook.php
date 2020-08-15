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

//將POST過來的變數assign進php中的$stdId變數
$category = $data -> category;
$category = "微積分";


$conn = connection();
$sql = "SELECT * FROM oldbook WHERE category = '$category' AND isSold = 0";
$result = $conn->query($sql);
if($result->num_rows > 0){
    $oldBookList = $result -> fetch_all(MYSQLI_ASSOC);
    echo json_encode(["success"=>1,"oldBookList"=>$oldBookList],JSON_UNESCAPED_UNICODE,JSON_FORCE_OBJECT);
}
else{
    echo json_encode(["success"=>0]);
}
$conn->close();

?>

