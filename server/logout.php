<?php
session_start();
session_destroy(); // Завершаем сессию
 header("Location: ../index.php");
        exit;
