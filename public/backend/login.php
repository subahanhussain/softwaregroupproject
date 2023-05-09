<?php
session_start();

try {
    $db = new PDO('sqlite:surgery.db');
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $nhsNo = $_POST['nhsNo'];
    $password = $_POST['password'];

    $stmt = $db->prepare("SELECT * FROM patients WHERE nhsNo = :nhsNo");
    $stmt->bindParam(':nhsNo', $nhsNo);
    $stmt->execute();
    $user = $stmt->fetch();

    if ($user && password_verify($password, $user['password'])) {
        if ($user['nhsNo'] == 'admin') {
            $_SESSION['isAdmin'] = true;
        } else {
            $_SESSION['nhsNo'] = $nhsNo;
            $_SESSION['isLoggedIn'] = true;
        }
    } else {
        $error = "Invalid login details.";
    }
} catch(PDOException $e) {
    print 'Exception : ' .$e->getMessage();
    die();
}
?>
