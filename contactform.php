<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent = "From: $name \r\n \r\n $message";
$recipient = "dc.rabideau@gmail.com";
$subject = "Contact Form Submission";
$mailheader = "From: $email \r\n";

$success = mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");

if ($success){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=contactthanks.php\">";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
}

 ?>
