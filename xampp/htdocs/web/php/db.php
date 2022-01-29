<?php
    $conn = mysqli_connect('localhost','root','', 'test');

   if(!$conn){
       echo "DB 접속 실패";
   }?>