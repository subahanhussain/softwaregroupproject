<?php
$database = new PDO('sqlite:your_database.db');
$nhsNo = $_POST['nhsNo'];
// Step 3: Create the SQL DELETE statement
$delete_query = "DELETE FROM users WHERE nhsNo = :nhsNo";
$statement = $database->prepare($delete_query);
$statement->bindParam(':nhsNo', $nhsNo);
$statement->execute();
$database = null;
?>
