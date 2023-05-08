<?php

try {
    $db = new PDO('sqlite:surgery.db');
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $nhsNo = filter_var ($_POST['nhsNumber'], FILTER_SANITIZE_STRING);
    $prescription = filter_var ($_POST['prescription'], FILTER_SANITIZE_STRING);
    isRepeat = $_POST['isRepeat'] === 'yes' ? 1 : 0;

    $stmt = $db->prepare('INSERT INTO prescriptions (nhsNo, prescription, is_repeat) 
                         VALUES (:nhsNo, :prescription, :is_repeat)');
                         
    $stmt = $db->prepare($SQL1);
    $stmt->execute([$nhsNo, $prescription, $is_repeat]);
    }

    $_SESSION['done'] = true;

} catch(PDOException $e) {
    print 'Exception : ' .$e->getMessage();
    die();
}

?>