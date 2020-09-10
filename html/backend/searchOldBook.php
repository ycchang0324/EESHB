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

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo "id: " . $row["id"]. " - 書名: " . $row["name"].  "<br>";
  }
} else {
  echo "0 results";
}
$conn->close();    
?>
    
<input type="button" value="回到查詢頁面" onclick="location.href='../searchOldBook.html'">
</body>
</html>





    

