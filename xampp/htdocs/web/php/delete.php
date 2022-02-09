<?php
    include('db.php');

    $id =   mysqli_real_escape_string($conn, $_POST['hiddenId']);
    $title = mysqli_real_escape_string($conn, $_POST['diaryTitle']);
    $diary = mysqli_real_escape_string($conn, $_POST['diaryText']);

    print_r($id);


?>