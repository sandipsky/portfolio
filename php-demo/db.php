<?php
$host = "localhost";
$user = "root"; // change if using another MySQL user
$pass = "Admin@123";     // set your MySQL password
$dbname = "portfolio";

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) {
    die("Database connection failed: " . $conn->connect_error);
}
?>
