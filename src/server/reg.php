<?php
session_start(); // Начинаем сессию, чтобы иметь доступ к переменной $_SESSION
require 'reqBD.php'; // Подключаем файл с настройками базы данных
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
header("Access-Control-Allow-Origin: http://localhost:3000"); // Разрешает доступ только с http://localhost:3000
header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); // Разрешает использование методов GET, POST и OPTIONS
header("Access-Control-Allow-Headers: Content-Type"); // Разрешает использование заголовков Content-Type
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // Если это preflight запрос, то завершаем скрипт после отправки заголовков
    exit();
}
$dataReact = json_decode(file_get_contents('php://input'), true); // Получение JSON данных из тела запроса
// Санитизация входных данных
$login = filter_var($dataReact['login'], FILTER_SANITIZE_STRING);
$password = $dataReact['password']; // Хеширование пароля будет ниже
$email = filter_var($dataReact['email'], FILTER_SANITIZE_EMAIL);
$phone = filter_var($dataReact['phone'], FILTER_SANITIZE_NUMBER_INT);
$radio = filter_var($dataReact['radio'], FILTER_SANITIZE_STRING);
$checkbox1 = filter_var($dataReact['checkbox1'], FILTER_SANITIZE_STRING);
$checkbox2 = filter_var($dataReact['checkbox2'], FILTER_SANITIZE_STRING);



// Проверка на уникальность логина и email
$checkQuery = $pdo->prepare("SELECT * FROM registration WHERE login = ? OR email = ?");
$checkQuery->execute([$login, $email]);
if ($checkQuery->rowCount() > 0) {
    // Если найдена запись с таким логином или email, выводим сообщение и прекращаем выполнение скрипта
    echo "Login or Email already exists. Please choose another.";
    exit;
}

// Хэширование пароля
$pass = password_hash($password, PASSWORD_DEFAULT);

// Подготовка и выполнение запроса на вставку
$query = $pdo->prepare("INSERT INTO registration (login, pass, email, phone, radio, checkbox1, checkbox2) VALUES (?, ?, ?, ?, ?, ?, ?)");
$query->execute([$login, $pass, $email, $phone, $radio, $checkbox1, $checkbox2]);

// Выполнение подготовленного запроса
try {
    $query->execute(); // Выполняем запрос на вставку

    // Устанавливаем данные сессии после успешной вставки
    $_SESSION['auth'] = true; // Пользователь авторизован
    $_SESSION['login'] = $login; // Сохраняем логин в сессии

    // Перенаправляем пользователя на главную страницу
    echo "success";
    exit;
} catch (PDOException $e) {
    // Обработка ошибки при выполнении запроса
    echo "ERROR: Could not execute query: " . $e->getMessage();
}

