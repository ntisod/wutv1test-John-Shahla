<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize form data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $age = htmlspecialchars(trim($_POST['age']));
    $gender = htmlspecialchars(trim($_POST['gender']));
    $interests = htmlspecialchars(trim($_POST['interests']));
    $bio = htmlspecialchars(trim($_POST['bio']));
    $location = htmlspecialchars(trim($_POST['location']));
    $preferences = htmlspecialchars(trim($_POST['preferences']));
    $occupation = htmlspecialchars(trim($_POST['occupation']));
    $hobbies = htmlspecialchars(trim($_POST['hobbies']));
    $relationship_status = htmlspecialchars(trim($_POST['relationship-status']));
    $looking_for = htmlspecialchars(trim($_POST['looking-for']));

    // Validate form data
    if (!empty($name) && !empty($email) && !empty($age) && !empty($gender) && !empty($interests) && !empty($bio) && !empty($location) && !empty($preferences) && !empty($occupation) && !empty($hobbies) && !empty($relationship_status) && !empty($looking_for)) {
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Recipient email address (replace with your email)
            $to = "john.sh.george@gmail.com";

            // Email subject
            $subject = "New Dating App Registration from $name";

            // Email body content
            $body = "Name: $name\n";
            $body .= "Email: $email\n";
            $body .= "Age: $age\n";
            $body .= "Gender: $gender\n";
            $body .= "Interests: $interests\n";
            $body .= "Bio: $bio\n";
            $body .= "Location: $location\n";
            $body .= "Preferences: $preferences\n";
            $body .= "Occupation: $occupation\n";
            $body .= "Hobbies: $hobbies\n";
            $body .= "Relationship Status: $relationship_status\n";
            $body .= "Looking For: $looking_for\n";

            // Additional headers
            $headers = "From: $name <$email>\r\n";
            $headers .= "Reply-To: $email\r\n";

            // Send the email
            if (mail($to, $subject, $body, $headers)) {
                echo "Thank you, your registration has been submitted successfully!";
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
    // If the form is not submitted, redirect back to the form page
    header("Location: förmular.html");
    exit;
}
?>

