<?php

//POST資料時必須要先有這些header檔

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

//需要連線mysql的database
require_once './db/db_connection.php';



//connection()為./db/db_connection.php中的一個函式，此時$conn已經連線至資料庫second_hand_book中
$conn = connection();

//檢查管理者輸入的帳密是否與login資料表中儲存的帳密相符，若相符，$isMember變數為1，否則為0
//$sql = "SELECT account,password FROM login ";
//$conn->query($sql);


//連線結束    
$conn->close();




?>
