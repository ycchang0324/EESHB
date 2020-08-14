<?php

function connection(){
    $servername = "db";
    mysql_query("SET NAMES UTF8");
    $username = "root";
    $password = "root";
    $dbname = "second_hand_book";

    $conn = new mysqli($servername,$username,$password,$dbname);
    
    return $conn;
}
?>