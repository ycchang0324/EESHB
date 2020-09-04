
<?
// output headers so that the file is downloaded rather than displayed
header('Content-Type: text/csv; charset=utf-8');
header('Content-Disposition: attachment; filename=data.csv');

// create a file pointer connected to the output stream
$output = fopen('php://output', 'w');

// output the column headings
fputcsv($output, array('id', 'name', 'price','category'));

// fetch the data
require_once './db/db_connection.php';
$conn = connection();

$rows = mysql_query('SELECT id, name, price, category FROM oldbook');

// loop over the rows, outputting them
while ($row = mysql_fetch_assoc($rows)) fputcsv($output, $row);
?>