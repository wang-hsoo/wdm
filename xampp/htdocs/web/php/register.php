<script src="../js/error.js"></script>
<?php

    include('db.php');

    if( isset($_POST['id']) && isset($_POST['password']) && 
    isset($_POST['name']) && isset($_POST['pwR']) ){
        
        //보안을 더욱 강화
        $id = mysqli_real_escape_string($conn, $_POST['id']);
        $password = mysqli_real_escape_string($conn, $_POST['password']);
        $pwR = mysqli_real_escape_string($conn, $_POST['pwR']);
        $name = mysqli_real_escape_string($conn, $_POST['name']);

        if( $password !== $pwR){
            ?>
            <script> 
                localStorage.setItem( "errorCode", JSON.stringify(2));
                location.replace("../register.html");
            </script>

            <?php



        }else{
        //저장
        //암호화
        //md5 양방향 암호 ->복호화 가능
        //hash 단방향 암호 
    
        $pass = password_hash($password, PASSWORD_DEFAULT);

        $sql_same = "SELECT * FROM member where id = '$id'";
        $order = mysqli_query($conn, $sql_same);

        if(mysqli_num_rows($order) > 0){
            ?>
            <script> 
                localStorage.setItem( "errorCode", JSON.stringify(3)); 
                location.replace("../register.html");
            </script>

            <?php

        }else{
            $sql_save = "insert into member (id, password, nik_name) 
            values ('$id', '$pass', '$name')";

            $result = mysqli_query($conn, $sql_save);

            if($result){
            ?> <script>
            location.replace("../index.html");
            </script>
             
               
         <?php   }else{   
             //가입실패 에러메세지
             
             ?>
                
                <script>
                    localStorage.setItem( "errorCode", JSON.stringify(5));  
                    location.replace("../register.html"); 
                </script>
               
          <?php  }
            }
            }
         } 
         else{ 
              // 그냥 에러
             ?>
            
            <script>
             localStorage.setItem( "errorCode", JSON.stringify(5));
             location.replace("../index.html");
            </script>
            
    <?php   }

?>
