<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
        header("Access-Control-Allow-Headers: content-type");
        exit;
        case("POST"): //Send the email;
            header("Access-Control-Allow-Origin: *");
            // Payload is not send to $_POST Variable,
            // is send to php:input as a text
            $json = file_get_contents('php://input');
            //parse the Payload from text format to Object
            $params = json_decode($json);
    
            $email = $params->email;
            $name = $params->name;
            $message = $params->message;
    
            $recipient = 'andrej.homann1990@gmail.com';  
            $subject = "Contact From <$email>";
            $message = "From:" . $name . "<br>" . $message ;
    
            $headers   = array();
            $headers[] = 'MIME-Version: 1.0';
            $headers[] = 'Content-type: text/html; charset=utf-8';

            // Additional headers
            $headers[] = "From: noreply@mywebsite.com";

            mail($recipient, $subject, $message, implode("\r\n", $headers));
            break;
        default: //Reject any non POST or OPTIONS requests.
            header("Allow: POST", true, 405);
            exit;
    } 


// $host = 'smtp.gmail.com';
// $port = 587;
// $username = 'your_email@gmail.com';
// $password = 'your_password';

// $headers = array();
// $headers[] = 'MIME-Version: 1.0';
// $headers[] = 'Content-type: text/html; charset=utf-8';
// $headers[] = 'From: noreply@mywebsite.com';

// $message = "From:" . $name . "<br>" . $message;

// // Set up the SMTP connection
// $mail = new PHPMailer(true);
// $mail->isSMTP();
// $mail->Host = $host;
// $mail->Port = $port;
// $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
// $mail->SMTPAuth = true;
// $mail->Username = $username;
// $mail->Password = $password;
// $mail->setFrom($username, 'WebApp');
// $mail->addAddress($recipient, 'Recipient Name');
// $mail->Subject = $subject;
// $mail->Body = $message;
// $mail->AltBody = strip_tags($message);

// if(!$mail->send()) {
//     echo 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo;
// } else {
//     echo 'Message sent successfully';
// }
