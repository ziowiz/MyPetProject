<?php
session_start();
require '../reqBD.php';  // Подключение файла с настройками базы данных

if (!empty($_POST['login']) && !empty($_POST['password'])) {
    $login = trim(filter_var($_POST['login'], FILTER_SANITIZE_STRING));
    $password = trim(filter_var($_POST['password'], FILTER_SANITIZE_STRING));

    // Подготовка SQL запроса для поиска пользователя
    $query = $pdo->prepare("SELECT * FROM tatausers WHERE login = ?");
    $query->execute([$login]);
    $user = $query->fetch(PDO::FETCH_ASSOC);

    if ($user) {
        // Проверяем, совпадает ли хешированный пароль
        $hash = 'PutinHUYLO';
        $hashedPassword = md5($password . $hash);

        if ($hashedPassword == $user['pass']) {
            // Авторизация успешна
            $_SESSION['auth'] = true; // Пользователь авторизован
            $_SESSION['login'] = $login; // Сохраняем логин в сессии

            echo "success";
            exit;
        } else {
            echo "Неверный пароль.";
        }
    } else {
        echo "Пользователь с таким логином не найден.";
    }
} else {
    echo "Пожалуйста, заполните все обязательные поля.";
}

