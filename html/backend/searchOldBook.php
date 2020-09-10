
<?php 

// POST 前要先有這些header檔
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");



//需要連線資料庫
require './db/db_connection.php';

$bookName = $_POST["bookName"]; 

//呼叫連線資料庫，$conn現在是操作資料庫的變數
$conn = connection();

$sql = "SELECT * FROM bookorder WHERE name = '%bookName%'";
$result = $conn->query($sql);
//if($result->num_rows > 0){
$orderList = $result -> fetch_all(MYSQLI_ASSOC);
echo $orderList;
//else{
    //echo json_encode(["success"=>0]);
//}
$conn->close();





?>
    

