<?php

require 'db_connection.php';


$servername = "db";
$username = "root";
$password = "root";


// Create connection
$conn = new mysqli($servername, $username, $password);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "CREATE DATABASE second_hand_book DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;";
if($conn->query($sql) === TRUE){
    echo json_encode([
        "success"=>1,
        "msg"=>"Database created successfully"
        ],JSON_UNESCAPED_UNICODE,JSON_FORCE_OBJECT
    );
    
}else{
    $errorMessage = "Error creating database: " . $conn->error;
    echo json_encode([
        "success"=>0,
        "msg"=>"$errorMessage"
        ],JSON_UNESCAPED_UNICODE,JSON_FORCE_OBJECT
    );
    
}

$conn->close();

$conn = connection();

$sql = "CREATE TABLE bookorder (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(30) NOT NULL,
stdId VARCHAR(30) NOT NULL,
category VARCHAR(10) NOT NULL,
subject VARCHAR(15) NOT NULL,
price INT(5) NOT NULL,
fee INT(5) NOT NULL,
state VARCHAR(20) NOT NULL,
buyerId VARCHAR(9), 
others VARCHAR(200),
reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)ENGINE=InnoDB DEFAULT CHARSET=utf8;";

if ($conn->query($sql) === TRUE) {
  echo json_encode([
        "success"=>1,
        "msg"=>"Table bookorder created successfully"
        ],JSON_UNESCAPED_UNICODE,JSON_FORCE_OBJECT
        );
} else {
    $errorMessage = "Error creating table bookorder: " . $conn->error;
    echo json_encode([
        "success"=>0,
        "msg"=>"$errorMessage"
        ],JSON_UNESCAPED_UNICODE,JSON_FORCE_OBJECT
    );
}

$conn->close();

$conn = connection();

$sql = "CREATE TABLE seller (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
stdId VARCHAR(9) NOT NULL,
name VARCHAR(30) NOT NULL,
bookNum INT(2) NOT NULL,
reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)ENGINE=InnoDB DEFAULT CHARSET=utf8;";

if ($conn->query($sql) === TRUE) {
  echo json_encode([
        "success"=>1,
        "msg"=>"Table seller created successfully"
        ],JSON_UNESCAPED_UNICODE,JSON_FORCE_OBJECT
        );
} else {
    $errorMessage = "Error creating table seller: " . $conn->error;
    echo json_encode([
        "success"=>0,
        "msg"=>"$errorMessage"
        ],JSON_UNESCAPED_UNICODE,JSON_FORCE_OBJECT
    );
}

$conn->close();

$conn = connection();

$sql = "CREATE TABLE login (
id INT(5) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
account VARCHAR(30) NOT NULL,
password VARCHAR(30) NOT NULL,
reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)ENGINE=InnoDB DEFAULT CHARSET=utf8;";

if ($conn->query($sql) === TRUE) {
  echo json_encode([
        "success"=>1,
        "msg"=>"Table login created successfully"
        ],JSON_UNESCAPED_UNICODE,JSON_FORCE_OBJECT
        );
} else {
    $errorMessage = "Error creating table login: " . $conn->error;
    echo json_encode([
        "success"=>0,
        "msg"=>"$errorMessage"
        ],JSON_UNESCAPED_UNICODE,JSON_FORCE_OBJECT
    );
}

$conn->close();

$conn = connection();

$sql = "CREATE TABLE feedback (
id INT(5) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
comment VARCHAR(500) NOT NULL,
reply VARCHAR(500) ,
reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)ENGINE=InnoDB DEFAULT CHARSET=utf8;";



if ($conn->query($sql) === TRUE) {
  echo json_encode([
        "success"=>1,
        "msg"=>"Table email created successfully"
        ],JSON_UNESCAPED_UNICODE,JSON_FORCE_OBJECT
        );
} else {
    $errorMessage = "Error creating table email: " . $conn->error;
    echo json_encode([
        "success"=>0,
        "msg"=>"$errorMessage"
        ],JSON_UNESCAPED_UNICODE,JSON_FORCE_OBJECT
    );
}

$conn->close();

$conn = connection();

$sql = "CREATE TABLE oldbook (
id INT(5) NOT NULL,
name VARCHAR(100) NOT NULL,
category VARCHAR(30) NOT NULL,
price INT(5) NOT NULL,
picture INT(5) NOT NULL,
isSold INT(2) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8;";


if ($conn->query($sql) === TRUE) {
  echo json_encode([
        "success"=>1,
        "msg"=>"Table oldbook created successfully"
        ],JSON_UNESCAPED_UNICODE,JSON_FORCE_OBJECT
        );
} else {
    $errorMessage = "Error creating table oldbook: " . $conn->error;
    echo json_encode([
        "success"=>0,
        "msg"=>"$errorMessage"
        ],JSON_UNESCAPED_UNICODE,JSON_FORCE_OBJECT
    );
}

$conn->close();

$conn = connection();

$sql = "CREATE TABLE email (
id INT(5) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
account VARCHAR(30) NOT NULL,
password VARCHAR(30) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8;";


if ($conn->query($sql) === TRUE) {
  echo json_encode([
        "success"=>1,
        "msg"=>"Table email created successfully"
        ],JSON_UNESCAPED_UNICODE,JSON_FORCE_OBJECT
        );
} else {
    $errorMessage = "Error creating table email: " . $conn->error;
    echo json_encode([
        "success"=>0,
        "msg"=>"$errorMessage"
        ],JSON_UNESCAPED_UNICODE,JSON_FORCE_OBJECT
    );
}

$conn->close();

/*
$conn = connection();

$sql = "CREATE TABLE log (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
affair VARCHAR(30) NOT NULL,
orderId VARCHAR(6) NOT NULL,
client VARCHAR(9) NOT NULL,
reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)";

if ($conn->query($sql) === TRUE) {
  echo json_encode([
        "success"=>1,
        "msg"=>"Table log created successfully"
        ],JSON_UNESCAPED_UNICODE,JSON_FORCE_OBJECT
        );
} else {
    $errorMessage = "Error creating table log: " . $conn->error;
    echo json_encode([
        "success"=>0,
        "msg"=>"$errorMessage"
        ],JSON_UNESCAPED_UNICODE,JSON_FORCE_OBJECT
    );
}

$conn->close();
*/

$conn = connection();

$sql = "CREATE TABLE trancation (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
affair VARCHAR(30) NOT NULL,
bookId INT(6) NOT NULL,
IO VARCHAR(2) NOT NULL,
ammount VARCHAR(6) NOT NULL,
client VARCHAR(9) NOT NULL,
reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)";

if ($conn->query($sql) === TRUE) {
  echo json_encode([
        "success"=>1,
        "msg"=>"Table trancation created successfully"
        ],JSON_UNESCAPED_UNICODE,JSON_FORCE_OBJECT
        );
} else {
    $errorMessage = "Error creating table trancation: " . $conn->error;
    echo json_encode([
        "success"=>0,
        "msg"=>"$errorMessage"
        ],JSON_UNESCAPED_UNICODE,JSON_FORCE_OBJECT
    );
}

$conn->close();
/*
$conn = connection();

$sql = "INSERT INTO email (account, password)
VALUES ('XXXXXX', 'XXXXXX')";

$conn->query($sql);

$sql = "INSERT INTO login (account, password)
VALUES ('XXXXXX', 'XXXXXXX')";

$conn->query($sql);
*/

?>