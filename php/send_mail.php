<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $message = trim($_POST['message']);

    if (!empty($name) && !empty($email) && !empty($message)) {
        $subject = "Nouveau message de $name";
        $body = "Nom: $name\nEmail: $email\n\nMessage:\n$message";

        $headers = "From: $name <$email>\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "X-Mailer: PHP/" . phpversion();

        if (mail('dylan.castrovinci@gmail.com', $subject, $body, $headers)) {
            echo 'Votre message a été envoyé avec succès.';
        } else {
            echo 'Une erreur s\'est produite lors de l\'envoi du mail.';
        }
    } else {
        echo 'Tous les champs sont obligatoires.';
    }
}
?>