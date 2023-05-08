<?php

header('Content-Type: application/json');

$db = new PDO('sqlite:surgery.db');

$result = $db->query('SELECT * FROM prescription_requests');

$prescription_requests = $result->fetchAll(PDO::FETCH_ASSOC);

$db = null;

echo json_encode($prescription_requests);
?>
