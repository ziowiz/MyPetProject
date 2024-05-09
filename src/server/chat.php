<?php
session_start(); // Начинаем сессию, чтобы иметь доступ к переменной $_SESSION
require '../mesBD.php'; // Подключаем файл с настройками базы данных

if (!empty($_POST['login']) && !empty($_POST['mess'])) {
    // Очищаем и санитизируем входные данные
    $login = trim(filter_var($_POST['login'], FILTER_SANITIZE_STRING));
    $mess = trim(filter_var($_POST['mess'], FILTER_SANITIZE_STRING));
    
    
    // Подготовка SQL запроса для вставки нового пользователя
    $query = $pdo->prepare("INSERT INTO messagetata (login, mess) VALUES (?, ?)");
    
    $query->bindParam(1, $login);
    $query->bindParam(2, $mess);
 

    // Выполнение подготовленного запроса
    try {
        $query->execute(); // Выполняем запрос на вставку
        exit;
    } catch (PDOException $e) {
        // Обработка ошибки при выполнении запроса
        echo "ERROR: Could not execute query: " . $e->getMessage();
    }
} else {
    // Если входные данные не заполнены, выводим сообщение об этом
    echo "Please fill all the required fields.";
}

