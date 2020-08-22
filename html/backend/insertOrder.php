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
$sql = "INSERT INTO bookorder(name, stdId, category, subject, price, fee, state, 
            buyerId, others)
            VALUES ('張原嘉',
                    'b08901049', 
                    '大一必修', 
                    '生物科學通論', 
                    '300', 
                    '5', 
                    '已收到書',
                    '',
                    ''
                    )";
$conn->query($sql);

$sql = "INSERT INTO bookorder(name, stdId, category, subject, price, fee, state, 
            buyerId, others)
            VALUES ('張原嘉',
                    'b08901049', 
                    '大一必修', 
                    '生物科學通論', 
                    '300', 
                    '5', 
                    '沒有拿書過來',
                    '',
                    ''
                    )";
$conn->query($sql);

$sql = "INSERT INTO bookorder(name, stdId, category, subject, price, fee, state, 
            buyerId, others)
            VALUES ('張原嘉',
                    'b08901049', 
                    '大一必修', 
                    '生物科學通論', 
                    '300', 
                    '5', 
                    '已賣出',
                    '',
                    ''
                    )";
$conn->query($sql);

$sql = "INSERT INTO bookorder(name, stdId, category, subject, price, fee, state, 
            buyerId, others)
            VALUES ('張原嘉',
                    'b08901049', 
                    '大一必修', 
                    '生物科學通論', 
                    '300', 
                    '5', 
                    '沒賣出',
                    '',
                    ''
                    )";
$conn->query($sql);

$sql = "INSERT INTO bookorder(name, stdId, category, subject, price, fee, state, 
            buyerId, others)
            VALUES ('張原嘉',
                    'b08901049', 
                    '大一必修', 
                    '生物科學通論', 
                    '300', 
                    '5', 
                    '已領錢或退書',
                    '',
                    ''
                    )";
$conn->query($sql);

//連線結束    
$conn->close();




?>
