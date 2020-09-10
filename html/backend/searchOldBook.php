<html>
<body>

<?php 



//需要連線資料庫
require './db/db_connection.php';

$bookName = $_POST["bookName"]; 

//呼叫連線資料庫，$conn現在是操作資料庫的變數
$conn = connection();
echo $bookName . "<br>"; 
$sql = "SELECT * FROM oldbook WHERE name LIKE '%d%' ";
$result = $conn->query($sql);
$total_records = $result -> num_rows;
echo $total_records . "<br>";
//else{
    //echo json_encode(["success"=>0]);
//}
$conn->close();

?>
    
<input type="button" value="回到查詢頁面" onclick="location.href='../searchOldBook.html'">
</body>
</html>





    

