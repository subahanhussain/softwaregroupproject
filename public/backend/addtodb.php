<?php

try {

    $db = new PDO('sqlite:surgery.db');
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $fname = filter_var($_POST['fname'], FILTER_SANITIZE_STRING);
    $lname = filter_var($_POST['lname'], FILTER_SANITIZE_STRING);
    $nhsNo = filter_var($_POST['nhsNo'], FILTER_SANITIZE_STRING);
    $mobNo = filter_var($_POST['mobNo'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $postcode = filter_var($_POST['postcode'], FILTER_SANITIZE_STRING);
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    $stmt = $db->prepare('INSERT INTO patients (fname, lname, nhsNo, mobNo, email, postcode, password)
                          VALUES (:fname, :lname, :nhsNo, :mobNo, :email, :postcode, :password)');

    $stmt->bindValue(':nhsNo', $nhsNo);
    $stmt->bindValue(':mobNo', $mobNo);
    $stmt->bindValue(':email', $email);
    $stmt->bindValue(':postcode', $postcode);
    $stmt->bindValue(':password', $password);

    $stmt->execute();
    $_SESSION['nhsNumber'] = $nhsNumber;
    $_SESSION['isLoggedIn'] = true;

} catch(PDOException $e) {
    print 'Exception : ' .$e->getMessage();
    die();
}

?>

