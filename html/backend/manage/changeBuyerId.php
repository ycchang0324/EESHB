<?php

//這些header檔用來POST
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

//連線資料庫
require_once '../db/db_connection.php';

//使用Manage類別
require '../class/manage.php';

//$data接收POST過來的函式
$data = json_decode(file_get_contents("php://input"));

//將POST過來的變數assign進php中的$stdId變數
$id = $data -> id;
$buyerId = $data -> buyerId;

/*
$stateStr = "";

if( $state == 0 ){
    $stateStr = "未收到書";
}
else if( $state == 1 ){
    $stateStr = "已收到書";
}
else if( $state == 2 ){
    $stateStr = "已賣出";
}
else if( $state == 3 ){
    $stateStr = "沒賣出";
}
else if( $state == 4 ){
    $stateStr = "已領錢或退書";
}
else if( $state == 5 ){
    $stateStr = "未領錢或退書";
}
else if( $state == 6 ){
    $stateStr = "沒有拿書過來";
}
else {
    json_encode(["success" => 0,"msg"=>"incorrect state!"]);
    exit;
}
*/

//echo json_encode(["success"=>1,"msg"=>"$buyerId"]);

if( !($buyerId == null) ){
    //創建$manager物件
    $manage = new Manage();

    //呼叫函式，以獲取編號相對的訂單
    $manage -> changeBuyerId( $id, $buyerId );


}

?>