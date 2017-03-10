<?php
    if ( isset( $_POST["form_submit"])){
        function validateFormData ( $formData){
            $formData = trim( stripslashes(htmlspecialchars( $formData)));
            return $formData;
        }
        if( !$_POST["form_name"] ){
            $nameError = "Please enter your name<br>";
        }else {
            $name = validateFormData(
                $_POST["form_name"]);
    
        }
        if(!$_POST["form_email"] ){
            $emailError = "Please enter your email<br>";
        }else {
            $email = validateFormData(
                $_POST["form_email"] );

        }
        if(!$_POST["form_message"] ){
            $messageError = "Please enter in a message<br>";
        }else {
            $message = validateFormData(
                $_POST["form_message"] );
        }
    }


?>