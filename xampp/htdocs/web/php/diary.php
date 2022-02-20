<script src="../js/writeDiary.js"></script>

<?php

    include('db.php');

    if( !empty($_POST['title']) && !empty($_POST['diary']) ){

        $title = mysqli_real_escape_string($conn, $_POST['title']);
        $diary = mysqli_real_escape_string($conn, $_POST['diary']);
        $id =   mysqli_real_escape_string($conn, $_POST['userId']);
        $date =   mysqli_real_escape_string($conn, $_POST['date']);



        $sql_same = "SELECT * FROM diary where title = '$title'";
        $order = mysqli_query($conn, $sql_same);

        if(mysqli_num_rows($order) > 0){
            ?>
            <script> 
                location.replace("../mainCon.html");
            </script>

            <?php
        }else{

        $sql_save = "insert into diary (id, title, content, date) 
            values ('$id', '$title', '$diary', '$date')";

        $result = mysqli_query($conn, $sql_save);

        

        ?>
        <script>


            diaryArray = new Array();
            diaryArray = JSON.parse(localStorage.getItem("diary"));

            consloe.log("<?=$diary?>");
            // var regex = /<br\s*[\/]?>/gi;

            let diaryCon = "<?=$diary?>";

            diaryCon = diaryCon.replace('\r\n', " ");

            console.log(diaryCon);

            let diary = {
                            title : "<?=$title?>",
                            content : diaryCon,
                            date : "<?=$date?>"
                         }

            console.log(diary.content);



            if(diaryArray === null){
                localStorage.setItem( "diary", JSON.stringify(diary));
                location.replace("../mainCon.html");
                
            }else if(diaryArray.lenght === undefined){
                <?php 
                     $diary = array();
                     $re = array();
                     $diary =  "SELECT * FROM diary where id = '$id'";
                     $re = mysqli_query($conn, $diary);
                     $num = mysqli_num_rows($re);

                     

                     if($num !== 0){
                        $get = array();

                        while($row = mysqli_fetch_assoc($re)){
                            array_push($get, $row);
                        }
                        ?> var diArray = new Array();<?php

                        
                        for($i = 0; $i < $num; $i++){
                            ?>
                             
                              var di = {
                                  title : "<?=$get[$i]["title"]?>",
                                  content : "<?=$get[$i]["content"]?>",
                                  date : "<?=$get[$i]["date"]?>"
                              }
                              
                              diArray.push(di);
                              
                              

                    <?php
                        }
                        ?>
                        localStorage.setItem( "diary", JSON.stringify(diArray));
                        location.replace("../mainCon.html");
                        <?php
                        
                     }else{
                         print_r("에러");
                     }
                    
                ?>
            }else{
                diaryArray.push(diary);
                localStorage.setItem( "diary", JSON.stringify(diaryArray));
                location.replace("../mainCon.html");
            }
        </script>
       <?php
    }

    }else{
        //그냥 에러
        
       ?>
       <script>
            location.replace("../mainCon.html");
       </script>
       <?php
    }


?>
