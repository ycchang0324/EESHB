<?php


//連線資料庫
require_once './db/db_connection.php';





$conn = connection();


$sql = "UPDATE feedback SET comment = '大家好，我們是二手書團隊，如果對我們的網站設計或是現場買賣書的規劃有任何建議或指教，可以在反應表單上面匿名跟我們建議喔！也歡迎到電機二手書臉書專頁按讚 ，你們的支持是對二手書團隊最棒的鼓勵！' WHERE id = 1" ;  

    
$result = $conn->query($sql);




   
$conn->close();

?>

