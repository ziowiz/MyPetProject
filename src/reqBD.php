<?php

$user = 'root';
$password = 'root';
$db = 'ziowiz';
$host = 'localhost';
$port = 3306;

// Создание строки подключения
$dsn = "mysql:host=$host;dbname=$db;port=$port;charset=utf8mb4";

try {
    $pdo = new PDO($dsn, $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("ERROR: Could not connect. " . $e->getMessage());
}
