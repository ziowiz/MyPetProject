<?php
session_start(); // Начало сессии
require '../mesBD.php'; // Подключаем базу данных

if (!empty($_POST['id'])) {
    $id = $_POST['id'];

    try {
        $query = $pdo->prepare("DELETE FROM messagetata WHERE id = ?");
        $query->bindParam(1, $id);
        $query->execute(); // Выполняем запрос

        if ($query->rowCount() > 0) {
            echo json_encode(["success" => "Message deleted successfully."]);
        } else {
            echo json_encode(["error" => "Message not found."]);
        }
    } catch (PDOException $e) {
        echo json_encode(["error" => $e->getMessage()]); // Возвращаем ошибку
    }
} else {
    echo json_encode(["error" => "Message ID not provided."]); // Сообщаем об отсутствии ID
}
