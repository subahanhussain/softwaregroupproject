<?php
  try
{
$db = new PDO('sqlite:../Database/Surgery.db');
$firstname = $_POST["fname"];
$lastname = $_POST["lname"];
$nhsNo = $_POST["nhsNo"];
$mobNo = $_POST["mobNo"];
$email = $_POST["email"];
$postcode = $_POST["postcode"];
$password = $_POST["password"];

$db->exec("INSERT INTO patients (fname, lname, nhsNo, mobNo, email, postcode, password)
 VALUES ('$firstname', '$lastname', '$nhsNo', '$mobNo', '$email', '$postcode', '$password');");
}
catch(PDOException $e)
{
print 'Exception : ' .$e->getMessage();
}

?>