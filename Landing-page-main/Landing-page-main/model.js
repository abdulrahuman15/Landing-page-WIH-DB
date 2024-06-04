
function formvalidation(){

    var a=  document.getElementById("form").value;
    var customername= document.getElementById("cusname").value;
    var phonenumber=document.getElementById("phnumer").value;
    var yourfrom =document.getElementById("from").value;
    var yordestination=document.getElementById("to").value;
    var date =document.getElementById("day-time").value;
    var hour = document.getElementById("hh").value;
    var dd_hour = document.getElementById("dd").value;
    var no_passanger=document.getElementById("noPassanger").value;
    var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    var emailvalidate =document.getElementById("email").value;
 
   


    
    if(customername ==""){
        document.getElementById("cusname").style.borderColor="red";
        document.getElementById("error").innerHTML="***Fill The Name***";
        return false
    }
    else{
        document.getElementById("cusname").style.borderColor="green" 
        document.getElementById("error").innerHTML="";
    }
    // phone number validation
    
if (phonenumber.length !==10) {
    document.getElementById("phnumer").style.borderColor = "red";
    document.getElementById("phoneerror").innerHTML = "***Enter The correct format number***";
    return false;
} else {
    document.getElementById("phnumer").style.borderColor = "green";
    document.getElementById("phoneerror").innerHTML = "";
}

    // from validation
    if(yourfrom ==""){
        document.getElementById("from").style.borderColor="red";
        document.getElementById("fromerror").innerHTML="***Enter The Your From***";
        return false
    }
    else{
        document.getElementById("from").style.borderColor="green";
        document.getElementById("fromerror").innerHTML="";
    }
    // to validation
    if(yordestination==""){

        document.getElementById("to").style.borderColor="red";
        document.getElementById("toerror").innerHTML="***Enter The Your Detination***";
        return false

    }
    else{
        document.getElementById("to").style.borderColor="green";
        document.getElementById("toerror").innerHTML="";
    }
    // date-and-time validation
    if(date==""){

        document.getElementById("day-time").style.borderColor="red";
        document.getElementById("day-time-error").innerHTML="***Enter The current Date***";
        return false

    }
    else{
        document.getElementById("day-time").style.borderColor="green";
        document.getElementById("day-time-error").innerHTML="";
    }
    // hour-hh validation
    if(hour==""){

        document.getElementById("hh").style.borderColor="red";
        document.getElementById("hherror").innerHTML="***Enter The Time***";
        return false

    }
    else{
        document.getElementById("hh").style.borderColor="green";
        document.getElementById("hherror").innerHTML="";
    }
    // dd valiadation
    if(dd_hour==""){

        document.getElementById("dd").style.borderColor="red";
        document.getElementById("dderror").innerHTML="***Enter The Time***";
        return false

    }
    else{
        document.getElementById("dd").style.borderColor="green";
        document.getElementById("dderror").innerHTML="";
    }
    // passanger validation

    if(no_passanger==""){

        document.getElementById("noPassanger").style.borderColor="red";
        document.getElementById("passangewr-error").innerHTML="***Enter The Passenger***";
        return false

    }
    else{
        document.getElementById("noPassanger").style.borderColor="green";
        document.getElementById("passangewr-error").innerHTML="";
       
    }
if(emailvalidate==""||emailvalidate.match(mailformat) ){

    document.getElementById("email").style.borderColor="red";
    document.getElementById("email-error").innerHTML="***Enter The Correct Email***";
    return false

}
else{
    document.getElementById("email").style.borderColor="green";
    document.getElementById("email-error").innerHTML="";
}

}
