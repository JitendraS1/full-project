<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Get the posted data
$postData = json_decode(file_get_contents('php://input'), true);

if (!$postData) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid request data']);
    exit;
}

// Extract form data
$name = $postData['name'] ?? '';
$email = $postData['email'] ?? '';
$phone = $postData['phone'] ?? '';
$subject = $postData['subject'] ?? 'Contact Form Submission';
$message = $postData['message'] ?? '';
$propertyType = $postData['propertyType'] ?? null;
$budget = $postData['budget'] ?? null;
$formType = $postData['formType'] ?? null;
$rating = $postData['rating'] ?? null;
$testimonial = $postData['testimonial'] ?? null;

// Determine form type
if ($formType) {
    $formTypeValue = $formType;
} else if ($propertyType !== null) {
    $formTypeValue = 'land-deal';
} else if ($rating !== null || $testimonial !== null) {
    $formTypeValue = 'testimonial';
} else {
    $formTypeValue = 'contact';
}

// Set email recipient
$to = 'info@nestoriagroup.com';
$bcc = 'bhadoriyaji@myself.com';

// Set email headers
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: Nestoria Website <info@nestoriagroup.com>\r\n";
$headers .= "Reply-To: {$email}\r\n";
if ($bcc) {
    $headers .= "Bcc: {$bcc}\r\n";
}

// Set email subject and content based on form type
$emailSubject = 'Website Form Submission';
$emailContent = '';

switch ($formTypeValue) {
    case 'land-deal':
        $emailSubject = 'Land Deal Inquiry';
        $emailContent = "<h3>New Land Deal Inquiry</h3>
            <p><strong>Name:</strong> {$name}</p>
            <p><strong>Email:</strong> {$email}</p>
            <p><strong>Phone:</strong> {$phone}</p>
            <p><strong>Property Type:</strong> {$propertyType}</p>
            <p><strong>Budget Range:</strong> " . ($budget ?: 'Not specified') . "</p>
            <p><strong>Requirements:</strong> {$message}</p>";
        break;
        
    case 'about-dholera':
        $emailSubject = "Dholera Information Request: " . ($subject ?: 'Website Inquiry');
        $emailContent = "<h3>New Dholera Information Request</h3>
            <p><strong>Name:</strong> {$name}</p>
            <p><strong>Email:</strong> {$email}</p>
            <p><strong>Phone:</strong> {$phone}</p>
            <p><strong>Subject:</strong> {$subject}</p>
            <p><strong>Message:</strong> {$message}</p>";
        break;
        
    case 'testimonial':
        $emailSubject = 'New Testimonial Submission';
        $emailContent = "<h3>New Testimonial Submission</h3>
            <p><strong>Name:</strong> {$name}</p>
            <p><strong>Email:</strong> {$email}</p>
            <p><strong>Rating:</strong> " . ($rating ?: 'Not specified') . "</p>
            <p><strong>Testimonial:</strong> " . ($testimonial ?: $message) . "</p>";
        break;
        
    default:
        $emailSubject = "Contact Form: " . ($subject ?: 'Website Inquiry');
        $emailContent = "<h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> {$name}</p>
            <p><strong>Email:</strong> {$email}</p>
            <p><strong>Phone:</strong> {$phone}</p>
            <p><strong>Subject:</strong> {$subject}</p>
            <p><strong>Message:</strong> {$message}</p>";
        break;
}

// Email content is already set based on form type

// Send email
$mailSent = mail($to, $emailSubject, $emailContent, $headers);

// Log email attempt for debugging
$logFile = __DIR__ . '/email_log.txt';
$logMessage = date('Y-m-d H:i:s') . " - Email to: {$to}, Subject: {$emailSubject}, Result: " . ($mailSent ? 'Success' : 'Failed') . "\n";
file_put_contents($logFile, $logMessage, FILE_APPEND);

if ($mailSent) {
    echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send email']);
}
?>