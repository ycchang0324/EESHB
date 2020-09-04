
<?php
// output headers so that the file is downloaded rather than displayed
header('Content-type:application/force-download');
header('Content-Type: text/csv; charset=utf-8');
header('Content-Disposition: attachment; filename=data.csv');

// create a file pointer connected to the output stream
$output = fopen('php://output', 'w');

// output the column headings
fputcsv($output, array('id', 'name', 'price','category'));

// fetch the data
require_once './db/db_connection.php';
$conn = connection();

$sql = "SELECT id, name, price, category FROM oldbook"; 
$rows = $conn->query($sql);

// loop over the rows, outputting them
while ($row = $rows->fetch_assoc()) fputcsv($output, $row);
?>