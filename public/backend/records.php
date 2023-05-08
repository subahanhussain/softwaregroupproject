<?php

header('Content-Type: application/json');

$db = new PDO('sqlite:central_medical_record.db');

$nhsNo = $_SESSION['nhsNo'];

$stmt = $db->prepare('SELECT * FROM medical_records WHERE nhsNo = :nhsNo');
$stmt->execute(array(':nhsNo' => $nhsNo));

$record = $stmt->fetch(PDO::FETCH_ASSOC);

$db = null;

echo json_encode($record);
?>
