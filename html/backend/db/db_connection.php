<?php

function connection(){
    $servername = "db";
    $username = "root";
    $password = "root";
    $dbname = "second_hand_book";

    $conn = new mysqli($servername,$username,$password,$dbname);
    $conn -> set_charset("utf8");
    
    return $conn;
}
?>