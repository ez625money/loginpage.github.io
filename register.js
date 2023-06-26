document.getElementById("btn").onclick = function(){

    var username=document.getElementById("name").value;
    var password=document.getElementById("password").value;
    var homeName=document.getElementById("homeName").value;
    var homePass=document.getElementById("homePass").value;

    if(password=homePass){
        document.getElementById("btn").disabled = true;
    }
        else{
        document.getElementById("btn").disabled = true;
    }
    }
    

            

