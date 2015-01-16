<?php
    // check if fields passed are empty
    if(empty($_POST['name']) ||
       empty($_POST['email']) ||
       empty($_POST['message'])	||
       !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
    {
        echo "No arguments Provided!";
        return false;
    }

    $myemail = 'projects@kokwet.org';// put your email
    $name = $_POST['name'];
    $email_address = $_POST['email'];
    $message = $_POST['message'];

    // create email body and send it	
    $to = $myemail; 
    $email_subject = "Contact form submitted by:  $name";
    $email_body = "Message submited from kokwet CBO. \n\n".
        " Here are the details:\n \nName: $name \n ".
        "Email: $email_address\n Message \n $message";
    $headers = "From: admin@kokwet.org\n";
    $headers .= "Reply-To: $email_address";	
    mail($to,$email_subject,$email_body,$headers);			
?>