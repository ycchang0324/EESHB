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



$sql = "INSERT INTO seller(stdId, name, bookNum)
                VALUES ('b08901072',
                    '王友廷',
                    1
                    )";

$conn->query($sql);

$sql = "INSERT INTO seller(stdId, name, bookNum)
                VALUES ('b08901097',
                    '徐有齊',
                    1
                    )";

$conn->query($sql);

$sql = "INSERT INTO seller(stdId, name, bookNum)
                VALUES ('b08901179',
                    '陳奕瑒',
                    1
                    )";

$conn->query($sql);

$sql = "INSERT INTO seller(stdId, name, bookNum)
                VALUES ('b08901099',
                    '邱吉鈞',
                    1
                    )";

$conn->query($sql);

$sql = "INSERT INTO seller(stdId, name, bookNum)
                VALUES ('b08901172',
                    '莊鳴鐸',
                    1
                    )";

$conn->query($sql);

$sql = "INSERT INTO seller(stdId, name, bookNum)
                VALUES ('b08901052',
                    '陳亮君',
                    1
                    )";

$conn->query($sql);

$sql = "INSERT INTO seller(stdId, name, bookNum)
                VALUES ('b08901204',
                    '蔡芳鐸',
                    1
                    )";

$conn->query($sql);

$sql = "INSERT INTO seller(stdId, name, bookNum)
                VALUES ('b08901088',
                    '張裴勻',
                    1
                    )";

$conn->query($sql);

$sql = "INSERT INTO seller(stdId, name, bookNum)
                VALUES ('b08901054',
                    '楊學翰',
                    1
                    )";

$conn->query($sql);
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



$sql = "INSERT INTO bookorder(name, stdId, category, subject, price, fee, state, 
            buyerId, others)
            VALUES ('王友廷',
                    'b08901072', 
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
            VALUES ('王友廷',
                    'b08901072', 
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
            VALUES ('王友廷',
                    'b08901072', 
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
            VALUES ('王友廷',
                    'b08901072', 
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
            VALUES ('王友廷',
                    'b08901072', 
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

$sql = "INSERT INTO bookorder(name, stdId, category, subject, price, fee, state, 
            buyerId, others)
            VALUES ('徐有齊',
                    'b08901097', 
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
            VALUES ('徐有齊',
                    'b08901097', 
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
            VALUES ('徐有齊',
                    'b08901097', 
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
            VALUES ('徐有齊',
                    'b08901097', 
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
            VALUES ('徐有齊',
                    'b08901097', 
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

$sql = "INSERT INTO bookorder(name, stdId, category, subject, price, fee, state, 
            buyerId, others)
            VALUES ('陳奕瑒',
                    'b08901179', 
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
            VALUES ('陳奕瑒',
                    'b08901179', 
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
            VALUES ('陳奕瑒',
                    'b08901179', 
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
            VALUES ('陳奕瑒',
                    'b08901179', 
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
            VALUES ('陳奕瑒',
                    'b08901179', 
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





$sql = "INSERT INTO bookorder(name, stdId, category, subject, price, fee, state, 
            buyerId, others)
            VALUES ('邱吉鈞',
                    'b08901099', 
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
            VALUES ('邱吉鈞',
                    'b08901099', 
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
            VALUES ('邱吉鈞',
                    'b08901099', 
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
            VALUES ('邱吉鈞',
                    'b08901099', 
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
            VALUES ('邱吉鈞',
                    'b08901099', 
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





$sql = "INSERT INTO bookorder(name, stdId, category, subject, price, fee, state, 
            buyerId, others)
            VALUES ('莊鳴鐸',
                    'b08901172', 
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
            VALUES ('莊鳴鐸',
                    'b08901172', 
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
            VALUES ('莊鳴鐸',
                    'b08901172', 
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
            VALUES ('莊鳴鐸',
                    'b08901172', 
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
            VALUES ('莊鳴鐸',
                    'b08901172', 
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





$sql = "INSERT INTO bookorder(name, stdId, category, subject, price, fee, state, 
            buyerId, others)
            VALUES ('陳亮君',
                    'b08901052', 
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
            VALUES ('陳亮君',
                    'b08901052', 
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
            VALUES ('陳亮君',
                    'b08901052', 
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
            VALUES ('陳亮君',
                    'b08901052', 
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
            VALUES ('陳亮君',
                    'b08901052', 
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





$sql = "INSERT INTO bookorder(name, stdId, category, subject, price, fee, state, 
            buyerId, others)
            VALUES ('蔡芳鐸',
                    'b08901204', 
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
            VALUES ('蔡芳鐸',
                    'b08901204', 
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
            VALUES ('蔡芳鐸',
                    'b08901204', 
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
            VALUES ('蔡芳鐸',
                    'b08901204', 
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
            VALUES ('蔡芳鐸',
                    'b08901204', 
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




$sql = "INSERT INTO bookorder(name, stdId, category, subject, price, fee, state, 
            buyerId, others)
            VALUES ('張裴勻',
                    'b08901088', 
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
            VALUES ('張裴勻',
                    'b08901088', 
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
            VALUES ('張裴勻',
                    'b08901088', 
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
            VALUES ('張裴勻',
                    'b08901088', 
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
            VALUES ('張裴勻',
                    'b08901088', 
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




$sql = "INSERT INTO bookorder(name, stdId, category, subject, price, fee, state, 
            buyerId, others)
            VALUES ('楊學翰',
                    'b08901054', 
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
            VALUES ('楊學翰',
                    'b08901054', 
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
            VALUES ('楊學翰',
                    'b08901054', 
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
            VALUES ('楊學翰',
                    'b08901054', 
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
            VALUES ('張楊學翰',
                    'b08901054', 
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
