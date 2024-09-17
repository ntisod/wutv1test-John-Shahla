<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize form data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Validate form data
    if (!empty($name) && !empty($email) && !empty($message)) {
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Recipient email address (replace with your email)
            $to = "john.sh.george@gmail.com";

            // Email subject
            $subject = "New Contact Form Submission from $name";

            // Email body content
            $body = "Name: $name\n";
            $body .= "Email: $email\n";
            $body .= "Message:\n$message\n";

            // Additional headers
            $headers = "From: $name <$email>\r\n";
            $headers .= "Reply-To: $email\r\n";

            // Send the email
            if (mail($to, $subject, $body, $headers)) {
                echo "Thank you, your message has been sent successfully!";
            } else {
                echo "Oops! Something went wrong, please try again.";
            }
        } else {
            echo "Invalid email address. Please enter a valid email.";
        }
    } else {
        echo "All fields are required. Please fill out the form completely.";
    }
} else {
    // If the form is not submitted, redirect back to the contact page
    header("Location: index.html");
    exit;
}
//made with help of chatgpt
?>

