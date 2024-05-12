<?php

require 'reqBD.php'; // Подключаем файл с настройками базы данных
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  exit(); // Завершаем выполнение скрипта для OPTIONS запроса
}
$dataReact = json_decode(file_get_contents('php://input'), true);
$name = trim(filter_var($dataReact['name'], FILTER_SANITIZE_STRING));
$message = trim(filter_var($dataReact['message'], FILTER_SANITIZE_STRING));


// Подготовка SQL запроса для вставки нового пользователя
$query = $pdo->prepare("INSERT INTO messageziowiz (name, message) VALUES (?, ?)");

$query->bindParam(1, $name);
$query->bindParam(2, $message);


// Выполнение подготовленного запроса
try {
  $query->execute(); // Выполняем запрос на вставку
  echo json_encode(['status' => 'success', 'message' => 'Message successfully added']);
  exit;
} catch (PDOException $e) {
  // Обработка ошибки при выполнении запроса
  echo json_encode(['status' => "ERROR: Could not execute query: " . $e->getMessage()]);
}

