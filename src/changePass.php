<?php
session_start();
require 'reqBD.php';

$dataReact = json_decode(file_get_contents('php://input'), true);

if (!empty($dataReact['login']) && !empty($dataReact['password']) && !empty($dataReact['email']) && !empty($dataReact['newPassword'])) {
  $login = trim(filter_var($dataReact['login'], FILTER_SANITIZE_STRING));
  $password = $dataReact['password'];
  $email = trim(filter_var($dataReact['email'], FILTER_SANITIZE_EMAIL));
  $newPassword = $dataReact['newPassword'];

  $query = $pdo->prepare("SELECT * FROM registration WHERE login = ? AND email = ?");
  $query->execute([$login, $email]);
  $user = $query->fetch(PDO::FETCH_ASSOC);

  if ($user && password_verify($password, $user['password'])) {
    $newPasswordHash = password_hash($newPassword, PASSWORD_DEFAULT);
    $updateQuery = $pdo->prepare("UPDATE registration SET password = ? WHERE login = ? AND email = ?");
    $updateQuery->execute([$newPasswordHash, $login, $email]);

    if ($updateQuery->rowCount()) {
      echo json_encode(["status" => "success", "message" => "Password successfully changed"]);
      exit;
    } else {
      echo json_encode(["status" => "error", "message" => "Password update failed"]);
      exit;
    }
  } else {
    echo json_encode(["status" => "error", "message" => "Incorrect login, email, or password"]);
    exit;
  }
} else {
  echo json_encode(["status" => "error", "message" => "Please fill in all required fields"]);
}
