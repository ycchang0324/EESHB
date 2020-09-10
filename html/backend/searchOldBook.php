<html>
<body>

<?php 



//需要連線資料庫
require './db/db_connection.php';

$bookName = $_POST["bookName"]; 
$category = $_POST["category"];
//呼叫連線資料庫，$conn現在是操作資料庫的變數
$conn = connection();
echo "類別為： " . $bookName . "<br><br>"; 
echo "搜尋關鍵字為： " . $category . "<br><br>"; 
if($category == "全部書籍")
    $sql = "SELECT * FROM oldbook WHERE name LIKE '%$bookName%' ";
    else
        $sql = "SELECT * FROM oldbook WHERE name LIKE '%$bookName%' AND category = '$category'";
$result = $conn->query($sql);
    
echo "共有： " . $result -> num_rows . "筆資料<br>";

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo "id: " . $row["id"]. "<br>";
    echo "書名: " . $row["name"].  "<br>";
    echo "類別: " . $row["category"].  "<br>";
    if( $row["isSold"] == 0 )
        echo "是否有貨： 尚有貨<br>";
    else 
        echo "是否有貨： 已賣出<br>";
    $link_address = "../old_book_picture/image_" . $row["picture"] . ".jpg";
      
    echo "<a href='$link_address'>書籍圖片</a><br>";
      echo "<br>";
  }
} else {
  echo "0 results";
}
$conn->close();    
?>
    
<input type="button" value="回到查詢頁面" onclick="location.href='../searchOldBook.html'">
</body>
</html>





    

