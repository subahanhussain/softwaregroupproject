<?php
session_start();

try {
    $db = new PDO('sqlite:surgery.db');
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $nhsNo = $_POST['nhsNo'];
    $password = $_POST['password'];

    $stmt = $db->prepare("SELECT * FROM patients WHERE nhsNo = :nhsNo");
    $stmt->bindValue(':nhsNo', $nhsNo);
    $stmt->execute();
    $patient = $stmt->fetch();

    if ($patient && password_verify($password, $patient['password'])) {
        $delete_query = "DELETE FROM patients WHERE nhsNo = :nhsNo";
        $statement = $db->prepare($delete_query);
        $statement->bindParam(':nhsNo', $nhsNo);
        $statement->execute();
        echo "Patient record successfully deleted.";
    } else {
        echo "Invalid login details.";
    }
} catch(PDOException $e) {
    echo "Exception : " .$e->getMessage();
}
?>