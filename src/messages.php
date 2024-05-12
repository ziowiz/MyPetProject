<?php

header('Content-Type: application/json'); // Устанавливаем заголовок Content-Type для JSON
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, OPTIONS, GET, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  exit(); // Завершаем выполнение скрипта для OPTIONS запроса
}
require 'reqBD.php'; // Подключаем файл с настройками базы данных

try {
  $query = $pdo->prepare("SELECT * FROM messageziowiz ORDER BY id DESC LIMIT 15"); // Готовим запрос
  $query->execute(); // Выполняем запрос

  $messages = $query->fetchAll(PDO::FETCH_ASSOC); // Получаем все результаты как ассоциативный массив

  echo json_encode($messages); // Возвращаем JSON
} catch (PDOException $e) {
  // В случае ошибки возвращаем сообщение об ошибке
  http_response_code(500); // Устанавливаем код ответа HTTP 500
  echo json_encode(['error' => 'Database error: ' . $e->getMessage()]);
}