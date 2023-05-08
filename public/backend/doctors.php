<?php

header('Content-Type: application/json');

$db = new PDO('sqlite:surgery.db');

$result = $db->query('SELECT * FROM doctors');

$doctors = $result->fetchAll(PDO::FETCH_ASSOC);

$db = null;

echo json_encode($doctors);
?>
