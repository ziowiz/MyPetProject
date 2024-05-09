
<?php
session_start(); // Начало сессии
require '../mesBD.php'; // Подключаем базу данных

function load($pdo) {
    $query = $pdo->prepare("SELECT * FROM messagetata ORDER BY id DESC LIMIT 10"); // Готовим запрос
    $query->execute(); // Выполняем запрос

    $messages = $query->fetchAll(PDO::FETCH_ASSOC); // Получаем все результаты как ассоциативный массив

    return json_encode($messages); // Возвращаем JSON
}

if ($_POST['act'] == 'load') {
    echo load($pdo); // Передаем соединение в функцию
}

