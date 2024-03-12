<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	$name = $_POST["name"];
	$email = $_POST["email"];
	$message = $_POST["message"];

	$to = "Dylan.castrovinci@gmail.com";
	$subject = "Nouveau message du formulaire";   
	$email_body = "Nom: $name\n";
	$email_body .= "Adresse e-mail: $email\n";
	$email_body .= "Message:\n$message";
	$headers = "From: $email";
	
	if (mail($to, $subject, $email_body, $headers)) {
		echo "Votre message a été envoyé avec succès.";
	} else {
		echo "Une erreur s'est produite lors de l'envoi de votre message.";
	}
} else {
	header("Location: index.html");
	exit;
}
?>
