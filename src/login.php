<?php
session_start(); // Начинаем сессию, чтобы иметь доступ к переменной $_SESSION
require 'reqBD.php'; // Подключаем файл с настройками базы данных
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  exit();  // Завершаем выполнение скрипта для OPTIONS запроса
}


$dataReact = json_decode(file_get_contents('php://input'), true);

if (!empty($dataReact['login']) && !empty($dataReact['password'])) {
  $login = trim(filter_var($dataReact['login'], FILTER_SANITIZE_STRING));
  $password = $dataReact['password'];

  $query = $pdo->prepare("SELECT * FROM registration WHERE login = ?");
  $query->execute([$login]);
  $user = $query->fetch(PDO::FETCH_ASSOC);
  $userPass = $user['password'];
  if ($user) {
    if (password_verify($password, $userPass)) {
      echo json_encode(["status" => "success", "message" => "Login successful", "login" => $user["login"]]);
      exit;
    } else {
      echo json_encode(["status" => "error", "message" => "Incorrect password"]);
      exit;
    }
  } else {
    echo json_encode(["status" => "error", "message" => "User not found"]);
    exit;
  }
} else {
  echo json_encode(["status" => "error", "message" => "Please fill in all required fields"]);
}
