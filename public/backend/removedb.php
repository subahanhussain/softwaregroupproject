<?php

try {

        $db = new PDO('sqlite:surgery.db');
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $nhsNo = $_POST['nhsNumber'];
        $password = $_POST['password'];

    
        if ($user) {
            $delete_query = "DELETE FROM patients WHERE nhsNo = :nhsNo";
            $statement = $database->prepare($delete_query);
            $statement->bindParam(':nhsNo', $nhsNo);
            $statement->execute();
            $database = null;
}

?>