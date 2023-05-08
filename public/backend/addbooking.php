<?php

try {

    $db = new PDO('sqlite:surgery.db');
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $nhsNo = filter_var ($_POST['nhsNumber'], FILTER_SANITIZE_STRING);
    $b_date = filter_var ($_POST["b_date"], FILTER_SANITIZE_STRING);
    $b_time = filter_var ($_POST["b_time"], FILTER_SANITIZE_STRING);
    $b_reason = filter_var ($_POST["b_reason"], FILTER_SANITIZE_STRING);
    $b_doctor = filter_var ($_POST["b_doctor"], FILTER_SANITIZE_STRING);

    $stmt = $db->prepare = ('INSERT INTO appointments (nhsNo, b_date, b_time, b_reason, b_doctor) 
                            VALUES (:nhsNo, :b_date, :b_time, :b_reason, b_doctor)');

    $stmt = $db->prepare($SQL1);
    $stmt->execute([$b_date, $b_time, $b_reason, $b_doctor]);
    }

     $_SESSION['done'] = true;
    
} catch(PDOException $e) {
    print 'Exception : ' .$e->getMessage();
    die();
}

?>