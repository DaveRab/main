<?php

$EmailFrom = "chriscoyier@gmail.com";
$EmailTo = "dc.rabideau@gmail.com";
$Subject = "Nice & Simple Contact Form by CSS-Tricks";
$Name = $_POST['name'];
$Email = $_POST['email'];
$Message = $_POST['message'];

// validation
$validationOK=true;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
  exit;
}

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $Name;
$Body .= "\r\n";
$Body .= "Email: ";
$Body .= $Email;
$Body .= "\r\n";
$Body .= "Message: ";
$Body .= $Message;
$Body .= "\r\n";

// send email
$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

// redirect to success page
if ($success){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=contactthanks.php\">";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
}
?>
