<script src="../js/writeDiary.js"></script>

<?php

    include('db.php');

    if( !empty($_POST['title']) && !empty($_POST['diary']) ){

        $title = mysqli_real_escape_string($conn, $_POST['title']);
        $diary = mysqli_real_escape_string($conn, $_POST['diary']);
        $id =   mysqli_real_escape_string($conn, $_POST['userId']);
        $date =   mysqli_real_escape_string($conn, $_POST['date']);

        $sql_save = "insert into diary (id, title, content, date) 
            values ('$id', '$title', '$diary', '$date')";

        $result = mysqli_query($conn, $sql_save);

        ?>
        <script>
            diaryArray = new Array();
            diaryArray = JSON.parse(localStorage.getItem("diary"));

            var diary = {
                            title : "<?=$title?>",
                            content : "<?=$diary?>",
                            date : "<?=$date?>"
                         }

            if(diaryArray === null){

                localStorage.setItem( "diary", JSON.stringify(diary));
                listUp();
                location.replace("../mainCon.html");

            }else {
                diaryArray.push(diary);
                localStorage.setItem( "diary", JSON.stringify(diaryArray));
                location.replace("../mainCon.html");
            }
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
