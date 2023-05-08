<?php

$db = new PDO('sqlite:surgery.db');

if (isset($_POST['selected_request'])) {
  $selected_request = $_POST['selected_request'];

  $statement = $db->prepare('SELECT * FROM prescription_requests WHERE id = :id');
  $statement->bindValue(':id', $selected_request);
  $statement->execute();
  $request = $statement->fetch(PDO::FETCH_ASSOC);

  $statement = $db->prepare('INSERT INTO prescriptions (nhsNo, prescription, is_repeat) 
							VALUES (:nhsNo, :prescription, :is_repeat)');

  $statement->bindValue(':nhsNo', $request['nhsNo']);
  $statement->bindValue(':prescription', $request['prescription']);
  $statement->bindValue(':is_repeat', $request['is_repeat']);
  $statement->execute();

  $statement = $db->prepare('DELETE FROM prescription_requests WHERE id = :id');
  $statement->bindValue(':id', $selected_request);
  $statement->execute();
}

$db = null;

?>