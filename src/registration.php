<?php
session_start(); // Начинаем сессию, чтобы иметь доступ к переменной $_SESSION
require 'reqBD.php'; // Подключаем файл с настройками базы данных


$dataReact = json_decode(file_get_contents('php://input'), true);

$login = filter_var($dataReact['login'], FILTER_SANITIZE_STRING);
$pass = $dataReact['password']; // Хеширование пароля будет ниже
$email = filter_var($dataReact['email'], FILTER_SANITIZE_EMAIL);
$phone = filter_var($dataReact['phone'], FILTER_SANITIZE_NUMBER_INT);
$radio = filter_var($dataReact['radio'], FILTER_SANITIZE_STRING);
$checkbox1 = filter_var($dataReact['checkbox1'], FILTER_SANITIZE_STRING);
$checkbox2 = filter_var($dataReact['checkbox2'], FILTER_SANITIZE_STRING);

// Проверка на уникальность логина и email
$checkQuery = $pdo->prepare("SELECT * FROM registration WHERE login = ? OR email = ?");
$checkQuery->execute([$login, $email]);
if ($checkQuery->rowCount() > 0) {
  echo "Login or Email already exists. Please choose another.";
  exit;
}

$password = password_hash($pass, PASSWORD_DEFAULT); // Хэширование пароля

// Подготовка запроса на вставку
$query = $pdo->prepare("INSERT INTO registration (login, password, email, phone, radio, checkbox1, checkbox2) VALUES (?, ?, ?, ?, ?, ?, ?)");

try {
  $query->execute([$login, $password, $email, $phone, $radio, $checkbox1, $checkbox2]); // Выполнение подготовленного запроса

  echo "MySQL: New record created successfully";
} catch (PDOException $e) {
  echo "ERROR: Could not execute query: " . $e->getMessage();
}



