<?php

session_start();

$db = new PDO('sqlite:Surgery.db');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nhsNo = $_POST['nhsNumber'];
}

$SQL1 = "INSERT into appointments ( )"












?>