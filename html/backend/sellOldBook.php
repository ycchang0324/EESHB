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
$id = $data -> id;
$price = $data -> price;
$buyerId = $data -> buyerId;
$buyerId = strtolower($buyerId);
$affair = '賣出舊書';


$conn = connection();
$sql = "UPDATE oldbook SET isSold = 1, buyerId = '$buyerId' WHERE id = '$id' AND isSold = 0 ";

if($conn->query($sql)){
    echo json_encode(["success"=>1,"msg"=>"selling successfully! "],JSON_UNESCAPED_UNICODE,JSON_FORCE_OBJECT);
}
else{
    echo json_encode(["success"=>0]);
}

 $sql = "INSERT INTO trancation( affair, IO, ammount, bookId, client ) 
            VALUES( '$affair', 'I', '$price' ,'$id','$buyerId')";
            $conn->query($sql);
$conn->close();

?>

