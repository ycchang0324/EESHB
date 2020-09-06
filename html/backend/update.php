<?php


//連線資料庫
require_once './db/db_connection.php';





$conn = connection();

$sql = "INSERT INTO bookorder(name, stdId, category, subject, price, fee, state, buyerId, others)
            VALUES ('張原嘉',
                    'b08901049', 
                    '大一必修', 
                    '交換電路與邏輯設計', 
                    '200', 
                    '20', 
                    '尚未收到書',
                    '',
                    ''
                    )";
$conn -> query($sql);
$sql = "INSERT INTO bookorder(name, stdId, category, subject, price, fee, state, buyerId, others)
            VALUES ('張原嘉',
                    'b08901049', 
                    '大一必修', 
                    '交換電路與邏輯設計', 
                    '300', 
                    '30', 
                    '尚未收到書',
                    '',
                    ''
                    )";
$conn -> query($sql);
$sql = "INSERT INTO bookorder(name, stdId, category, subject, price, fee, state, buyerId, others)
            VALUES ('張原嘉',
                    'b08901049', 
                    '大一必修', 
                    '交換電路與邏輯設計', 
                    '500', 
                    '50', 
                    '尚未收到書',
                    '',
                    ''
                    )";
$conn -> query($sql);
$sql = "INSERT INTO bookorder(name, stdId, category, subject, price, fee, state, buyerId, others)
            VALUES ('張原嘉',
                    'b08901049', 
                    '大一必修', 
                    '交換電路與邏輯設計', 
                    '700', 
                    '70', 
                    '尚未收到書',
                    '',
                    ''
                    )";
$conn -> query($sql);
$sql = "INSERT INTO seller(stdId, name, bookNum)
                VALUES ('b08901049',
                    '張原嘉',
                    '4'
                    )";
                
$conn -> query($sql);


$conn->close();

?>