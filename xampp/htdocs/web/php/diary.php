<script src="../js/writeDiary.js"></script>

<?php

    include('db.php');
    include('server.php');

    if( isset($_POST['title']) && isset($_POST['diary']) ){

        $title = mysqli_real_escape_string($conn, $_POST['title']);
        $diary = mysqli_real_escape_string($conn, $_POST['diary']);
        $id =   mysqli_real_escape_string($conn, $_POST['userId']);
        $date =   mysqli_real_escape_string($conn, $_POST['date']);

        $sql_save = "insert into diary (id, title, content, date) 
            values ('$id', '$title', '$diary', '$date')";

        $result = mysqli_query($conn, $sql_save);

        ?>
        <script> 
            location.replace("../mainCon.html");
        </script>
    <?php

    }else{
        //그냥 에러
        ?>
             
            <script>
                location.replace("../mainCon.html");    
            </script>
            
    <?php 
    }


?>
