<?php
/**
 * UxVel contact endpoint — runs on Hostinger shared hosting (PHP is available there).
 * Receives JSON from the site's contact form and mails it to the mailbox below.
 * Change CONTACT_TO to the Hostinger mailbox that should receive enquiries.
 */
declare(strict_types=1);

const CONTACT_TO   = 'hello@uxvel.com';          // where enquiries land
const CONTACT_FROM = 'website@uxvel.com';        // must be a mailbox on this domain (create it in hPanel > Emails)
const SITE_NAME    = 'uxvel.com';

header('Content-Type: application/json; charset=utf-8');

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'method_not_allowed']);
    exit;
}

$raw  = file_get_contents('php://input') ?: '';
$data = json_decode($raw, true);
if (!is_array($data)) { $data = $_POST; }

$name    = trim((string)($data['name'] ?? ''));
$email   = trim((string)($data['email'] ?? ''));
$company = trim((string)($data['company'] ?? ''));
$brief   = trim((string)($data['brief'] ?? ''));
$trap    = trim((string)($data['website'] ?? ''));   // honeypot: real people leave it empty

if ($trap !== '') { echo json_encode(['ok' => true]); exit; }

if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'invalid_email']);
    exit;
}
if (mb_strlen($brief) > 8000 || mb_strlen($name) > 200 || mb_strlen($company) > 200) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'too_long']);
    exit;
}

$subject = 'New enquiry — ' . ($company !== '' ? $company : ($name !== '' ? $name : $email));
$body = "New enquiry from " . SITE_NAME . "\n\n"
      . "Name:    " . ($name ?: '-') . "\n"
      . "Email:   " . $email . "\n"
      . "Company: " . ($company ?: '-') . "\n\n"
      . "Brief:\n" . ($brief ?: '-') . "\n\n"
      . "Sent: " . gmdate('Y-m-d H:i') . " UTC\n"
      . "IP:   " . ($_SERVER['REMOTE_ADDR'] ?? '-') . "\n";

$headers = [
    'From: ' . SITE_NAME . ' <' . CONTACT_FROM . '>',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: PHP/' . phpversion(),
];

$sent = @mail(CONTACT_TO, $subject, $body, implode("\r\n", $headers));

if (!$sent) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'send_failed']);
    exit;
}

echo json_encode(['ok' => true]);
