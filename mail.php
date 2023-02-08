<?php

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['nachricht'];

$message_content = "<p>Von: $name</p>";
$message_content .= "<p>E-Mail: $email</p>";
$message_content .= "<p>Betreff: $subject</p>";
$message_content .= "<p>Nachricht: $message</p>";

$subject = "Kontaktformular OB Wahl 2023: $subject";
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=utf-8';
$headers[] = 'From:' . $name . '<' . strval($email) . '>';
$headers[] = 'roman-goetzmann.de';

mail('eliasenglen2@gmail.com', $subject, $message_content, implode("\r\n", $headers));
