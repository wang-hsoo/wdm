<script src="../js/error.js"></script>
<?php

    include('db.php');

    if( isset($_POST['id']) && isset($_POST['password'])  ){
        
        //보안을 더욱 강화
        $id = mysqli_real_escape_string($conn, $_POST['id']);
        $password = mysqli_real_escape_string($conn, $_POST['password']);


        
            $sql =  "SELECT * FROM member where id = '$id'";
            $result = mysqli_query($conn, $sql);



            if(mysqli_num_rows($result) === 1){
               $row = mysqli_fetch_assoc($result);
               $hash = $row['password'];
               $name = $row['nik_name'];

              if(password_verify($password, $hash)){
                ?>
                    <script> 
                        var userIn = {
                            "id" : '<?=$id?>',
                            "name" : '<?=$name?>'
                        };
                        localStorage.setItem( "userinfo", JSON.stringify(userIn));
                    </script>
                 <?php


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
                


                }
                else{
                    ?><script>
                       location.replace("../mainCon.html");
                    </script><?php

                }

              }else{
                  //로그인 실패
                  ?>  

                <script>
                    location.replace("../index.html");
                </script>


                <?php
              }
            }else{
                //아이디 잘못입력
                ?>  
                <script>
                    localStorage.setItem( "errorCode", JSON.stringify(1));
                    location.replace("../index.html");
                </script>


                <?php
            }
         } // 그냥 에러
         else{ ?>
             
            <script>
                localStorage.setItem( "errorCode", JSON.stringify( 5));
                location.replace("../index.html");
            </script>
            
    <?php   }

?>

<script src="../js/writeDiary.js"></script>
