<html>
<body>

<?php 



//需要連線資料庫
require './db/db_connection.php';

$bookName = $_POST["bookName"]; 

//呼叫連線資料庫，$conn現在是操作資料庫的變數
$conn = connection();
echo "搜尋關鍵字為： " . $bookName . "<br>"; 
$sql = "SELECT * FROM oldbook WHERE name LIKE '%d%' ";
$result = $conn->query($sql);
$total_records = $result -> num_rows;
echo "共有 " . $total_records . " 筆符合<br>";

$row = $result -> fetch_assoc();
printf ("%s (%s)\n", $row["id"], $row["name"]);
$conn->close();

?>
    
<input type="button" value="回到查詢頁面" onclick="location.href='../searchOldBook.html'">
</body>
</html>





    

