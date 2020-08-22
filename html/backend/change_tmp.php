
<?php

//POST資料時必須要先有這些header檔

//需要連線mysql的database
require_once './db/db_connection.php';



//connection()為./db/db_connection.php中的一個函式，此時$conn已經連線至資料庫second_hand_book中
$conn = connection();

//檢查管理者輸入的帳密是否與login資料表中儲存的帳密相符，若相符，$isMember變數為1，否則為0
$sql = "UPDATE oldbook SET category = '系上其他選修' WHERE category = '系上選修' ";
$conn->query($sql);


//連線結束    
$conn->close();

//回傳$isMember的值。




?>
