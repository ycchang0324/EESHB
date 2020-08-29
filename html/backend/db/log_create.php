<?php
require 'db_connection.php';
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

?>