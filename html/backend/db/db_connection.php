<?php

function connection(){
    $servername = "db";
    $username = "root";
    $password = "root";
    $dbname = "second_hand_book";

    $conn = new mysqli($servername,$username,$password,$dbname);
    mysqli_set_charset($conn, "utf8");//設定編碼為utf-8
    mysql_query("SET names 'utf8'");
    mysql_query("set character set 'utf8'",$conn);
    mysql_query("SET character_set_database='utf8'",$conn);
    mysql_query("SET character_set_client='utf8'",$conn);
    mysql_query("SET character_set_results='utf8'",$conn);
    mysql_query("SET character_set_server='utf8'",$conn);
    mysql_query("SET character_set_connection='utf8'",$conn);
    return $conn;
}
?>