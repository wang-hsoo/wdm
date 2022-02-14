<?php
    include('db.php');

    $id =   mysqli_real_escape_string($conn, $_POST['hiddenId']);
    $title = mysqli_real_escape_string($conn, $_POST['hiddenTitle']);
    $text = mysqli_real_escape_string($conn, $_POST['hiddenText']);

    $del = "DELETE FROM diary where id = '$id' && title = '$title' && content = '$text'";
    $result = mysqli_query($conn, $del);

    $diary =  "SELECT * FROM diary where id = '$id'";
    $re = mysqli_query($conn, $diary);
    $num = mysqli_num_rows($re);
    
    if( $num !== 0 ){
        $get = array();
        
        while($row = mysqli_fetch_assoc($re)){
            array_push($get, $row);
        }


        ?><script>var diaryArray = new Array();</script><?php

        for($i = 0; $i < $num; $i++){
        ?>
        <script>
                  var diary = {
                      title : "<?=$get[$i]["title"]?>",
                      content : "<?=$get[$i]["content"]?>",
                      date : "<?=$get[$i]["date"]?>"
                  }

                  diaryArray.push(diary);
        </script>

        <?php
        

        }

    



        ?><script>
           localStorage.setItem( "diary", JSON.stringify(diaryArray));
           location.replace("../mainCon.html");
        </script><?php
    


    }else{
        ?><script>
           localStorage.removeItem("diary");
           location.replace("../mainCon.html");
        </script><?php
    }
    



?>