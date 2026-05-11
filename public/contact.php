<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Handle preflight OPTIONS request
if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Invalid request method"]);
    exit;
}

// Read JSON input
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "No data provided"]);
    exit;
}

// Sanitize inputs
$name = isset($data['name']) ? strip_tags(trim($data['name'])) : '';
$email = isset($data['email']) ? filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL) : '';
$enquiry = isset($data['enquiry']) ? strip_tags(trim($data['enquiry'])) : '';
$message = isset($data['message']) ? strip_tags(trim($data['message'])) : '';

// Validate inputs
if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Please fill in all required fields"]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Invalid email format"]);
    exit;
}

// Email details
$to = "info@canaanbusinesshouse.com";
$subject = "New Website Enquiry from: " . $name;

$email_body = "You have received a new enquiry from the website contact form.\n\n";
$email_body .= "Name: " . $name . "\n";
$email_body .= "Email: " . $email . "\n";
$email_body .= "Nature of Enquiry: " . $enquiry . "\n\n";
$email_body .= "Message:\n" . $message . "\n";

$headers = "From: noreply@canaanbusinesshouse.com\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email
if (mail($to, $subject, $email_body, $headers)) {
    echo json_encode(["status" => "success", "message" => "Thank you! Your message has been sent."]);
} else {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Oops! Something went wrong and we couldn't send your message."]);
}
?>
