<?php

$n = $_POST['name'];
$phoneno = $_POST['PhoneNumber'];
$from = $_POST['From'];
$to = $_POST['to'];
$currentday = $_POST['Day&Time'];
$hh = $_POST['hh'];
$dd = $_POST['dd'];
$passanger = $_POST['Passanger'];
$class = $_POST['class'];
// connecting with php
$con = mysqli_connect("localhost","root","","landingpage");

// value insert in db:
$sql="INSERT INTO user( username ,phonenumber,start_place,end_place,daytime,hh,dd,passanger,class)
 value('$n','$phoneno','$from','$to','$currentday','$hh','$dd','$passanger','$class')";
 $result =mysqli_query($con,$sql);
 if($result){
    echo "success fully connected";
 }
 else{
    echo " not connected";
 }

?>