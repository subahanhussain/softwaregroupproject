<?php

$db = new PDO('sqlite:surgery.db');

if (isset($_POST['selected_booking'])) {
  $selected_booking = $_POST['selected_booking'];

  $statement = $db->prepare('SELECT * FROM booking_requests WHERE id = :id');
  $statement->bindValue(':id', $selected_booking);
  $statement->execute();
  $booking = $statement->fetch(PDO::FETCH_ASSOC);

  $statement = $db->prepare('INSERT INTO appointments (nhsNo, b_date, b_time, b_reason, b_doctor) 
                            VALUES (:nhsNo, :b_date, :b_time, :b_reason, b_doctor)');

  $statement->bindValue(':nhsNo', $booking['nhsNo']);
  $statement->bindValue(':b_date', $booking['b_date']);
  $statement->bindValue(':b_time', $booking['b_time']);
  $statement->bindValue(':b_reason', $request['b_reason']);
  $statement->bindValue(':b_doctor', $booking['b_doctor']);

  $statement->execute();

  $statement = $db->prepare('DELETE FROM booking_requests WHERE id = :id');
  $statement->bindValue(':id', $selected_booking);
  $statement->execute();
}

$db = null;

?>