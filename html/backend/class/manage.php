<?php

//這是Manage類別，裡面有五個函式
class Manage {
    //這個函式輸入學號後，會把所有這個學號的訂單全部秀出來
    function getBookOrderStdId($stdId){
        $conn = connection();
        $sql = "SELECT * FROM bookorder WHERE stdId = '$stdId'";
        $result = $conn->query($sql);
        if($result->num_rows > 0){
            $orderList = $result -> fetch_all(MYSQLI_ASSOC);
            echo json_encode(["success"=>1,"orderList"=>$orderList],JSON_UNESCAPED_UNICODE,JSON_FORCE_OBJECT);
        }
        else{
            echo json_encode(["success"=>0]);
        }
        $conn->close();
        
    }
    
    //這個函式輸入訂單編號後，會把這個訂單秀出來
    function getBookOrderBookId($id){
        $conn = connection();
        $sql = "SELECT * FROM bookorder WHERE id = '$id'";
        $result = $conn->query($sql);
        if($result->num_rows > 0){
            $orderList = $result -> fetch_all(MYSQLI_ASSOC);
            echo json_encode(["success"=>1,"orderList"=>$orderList],JSON_UNESCAPED_UNICODE,JSON_FORCE_OBJECT);
        }
        else{
            echo json_encode(["success"=>0]);
        }
        $conn->close();
        
    }
    
    //呼叫這個函式後，會把所有尚未收到書的訂單全部改成未收到書
    function notReceive(){
        $conn = connection();
        $sql = "SELECT * FROM bookorder WHERE state = '尚未收到書'";
        $result = $conn->query($sql);
        $success = 1;
        while($row = $result->fetch_assoc()){
            $sql = "UPDATE bookorder SET state='沒有拿書過來' WHERE id=$row[id]";
            if (!($conn->query($sql) === TRUE)) {
                $success = 0;
                  
            }
        }
            if( $success ){
                echo json_encode(["success"=>1,"msg"=>"成功更改至沒有拿書過來狀態"],JSON_UNESCAPED_UNICODE,JSON_FORCE_OBJECT); 
            }
            else{

                echo json_encode(["success"=>0,"msg"=>"更改狀態失敗"],JSON_UNESCAPED_UNICODE,JSON_FORCE_OBJECT);
            }
        
        $conn->close();
    }
    
    //呼叫這個函式後，會把所有已收到書的訂單全部改成沒賣出
    function notSold(){
        $conn = connection();
        $sql = "SELECT * FROM bookorder WHERE state = '已收到書'";
        $result = $conn->query($sql);
        $success = 1;
        while($row = $result->fetch_assoc()){
            $sql = "UPDATE bookorder SET state='沒賣出' WHERE id=$row[id]";
             if (!($conn->query($sql) === TRUE)) {
                $success = 0;        
            }
        }
        if( $success ){
            echo json_encode(["success"=>1,"msg"=>"成功更改至沒賣出狀態"],JSON_UNESCAPED_UNICODE,JSON_FORCE_OBJECT); 
        }
        else{

            echo json_encode(["success"=>0,"msg"=>"更改狀態失敗"],JSON_UNESCAPED_UNICODE,JSON_FORCE_OBJECT);
        }
            
        

        $conn->close(); 
    }
    
    //呼叫這個函式後，會把所有已賣出或沒賣出的訂單改成未領錢或退出的狀態
    function notGivenBack(){
        $conn = connection();
        $sql = "SELECT * FROM bookorder WHERE state = '已賣出'";
        $result = $conn->query($sql);
        $success = 1;
        while($row = $result->fetch_assoc()){
            $sql = "UPDATE bookorder SET state='未領錢' WHERE id=$row[id]";
            
             if (!($conn->query($sql) === TRUE)) {
                $success = 0;        
            }
        }
        
        $sql = "SELECT * FROM bookorder WHERE state = '未賣出'";
        $result = $conn->query($sql);
        $success = 1;
        while($row = $result->fetch_assoc()){
            $sql = "UPDATE bookorder SET state='未退書' WHERE id=$row[id]";
            
             if (!($conn->query($sql) === TRUE)) {
                $success = 0;        
            }
        }
        
        if( $success ){
            echo json_encode(["success"=>1,"msg"=>"成功更改至沒有領錢或退書狀態"],JSON_UNESCAPED_UNICODE,JSON_FORCE_OBJECT); 
        }
        else{

            echo json_encode(["success"=>0,"msg"=>"更改狀態失敗"],JSON_UNESCAPED_UNICODE,JSON_FORCE_OBJECT);
        }
    
        $conn->close(); 
        
    }
    
   
    function changeState( $id, $state){
        $conn = connection();
        $sql = "SELECT * FROM bookorder WHERE id = '$id'";
        if($result = $conn -> query( $sql )){
            $row = $result->fetch_array();
            $stdId = $row['stdId'];
            $price = $row['price'];
            $fee =$row['fee'];
        }

        
        
        if( $state == '已賣出'){
            $sql = "INSERT INTO trancation( affair, IO, ammount, client ) 
            VALUES( '已賣出', 'I', '$price' ,'$stdId')";
            $conn->query($sql);
        }
        else if( $state == '已領錢'){
            $giveBack = $price - $fee;
            
            $sql = "INSERT INTO trancation( affair, IO, ammount, client )
            
            VALUES( '已領錢', 'O', '$fee' ,'$stdId')";
            $conn->query($sql);
        }else{
            ;
        }
            
        $sql = "UPDATE bookorder SET state = '$state' WHERE id = '$id'";
      
        
        if ($conn->query($sql) === TRUE) {
            echo json_encode(["success"=>1,"msg"=>"成功更改狀態"],JSON_UNESCAPED_UNICODE,JSON_FORCE_OBJECT);
                
            }else {
                $msg = "更改狀態失敗 " . $conn->error;
                echo json_encode(["success"=>0,"msg"=>"wrong!"],JSON_UNESCAPED_UNICODE,JSON_FORCE_OBJECT);
            }
    }
    

    function changeBuyerId( $id, $buyerId ){
        $conn = connection();
        $sql = "UPDATE bookorder SET buyerId = '$buyerId' WHERE id = '$id'";
      
        
        if ($conn->query($sql) === TRUE) {
            echo json_encode(["success"=>1,"msg"=>"成功更改狀態"],JSON_UNESCAPED_UNICODE,JSON_FORCE_OBJECT);
                
            }else {
                $msg = "更改狀態失敗 " . $conn->error;
                echo json_encode(["success"=>0,"msg"=>"wrong!"],JSON_UNESCAPED_UNICODE,JSON_FORCE_OBJECT);
            }
    }
}
?>