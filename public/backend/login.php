<?php
session_start();

try {

    $db = new PDO('sqlite:surgery.db');
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
    $stmt = $db->prepare("SELECT * FROM patients WHERE nhsNo = :nhsNo");
    $stmt->bindValue(':nhsNo', $nhsNumber);
    $stmt->execute();
    $user = $stmt->fetch();

    if($user && password_verify($password, $user['password'])) {
        if ($user['nhsNumber'] == 'admin') {
            $_SESSION['admin'] = true;
        } else {
            $_SESSION['nhsNumber'] = $nhsNumber;
            $_SESSION['loggedIn'] = true;
        }
    } else {
        $error = "Invalid login details.";
    }

} catch(PDOException $e) {
    print 'Exception : ' .$e->getMessage();
    die();
}

?>