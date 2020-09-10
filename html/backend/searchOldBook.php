<html>
<body>

<?php 



//需要連線資料庫
require './db/db_connection.php';

$bookName = $_POST["bookName"]; 

//呼叫連線資料庫，$conn現在是操作資料庫的變數
$conn = connection();

$sql = "SELECT * FROM bookorder WHERE name = '%$bookName%'";
$result = $conn->query($sql);
//if($result->num_rows > 0){
$orderList = $result -> fetch_all(MYSQLI_ASSOC);
echo json_encode(["success"=>1,"oldBookList"=>$oldBookList],JSON_UNESCAPED_UNICODE,JSON_FORCE_OBJECT);
;
//else{
    //echo json_encode(["success"=>0]);
//}
$conn->close();

?>
    
<input type="button" value="回到查詢頁面" onclick="location.href='../searchOldBook.html'">
</body>
</html>





    

