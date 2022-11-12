$(document).ready(function () { 
    //for initially add class
    var start = 0;
    if(start == 0){
            document.getElementById("nav-why").style.color="white"
            document.getElementById("nav-learn").style.color="white"
            document.getElementById("nav-docs").style.color="white"
            document.getElementById("nav-packages").style.color="white"
            document.getElementById("nav-community").style.color="white"
        start = 1;
    }

    // to rmove slide and add or remove class
    $('body').click(function () {
        console.log("body")

         $('.navbar-collapse').collapse('hide');
         if(x==1){
            console.log("body inside")
            document.getElementById("navbarDropdownMenuLink").style.color="#007D9C"
            document.getElementById("nav-learn").style.color="#007D9C"
            document.getElementById("nav-docs").style.color="#007D9C"
            document.getElementById("nav-packages").style.color="#007D9C"
            document.getElementById("nav-community").style.color="#007D9C"

            $("#navbarCollapse").addClass("bg-white");
            x=0;
         }
         else{
            $("#navbarCollapse").removeClass("bg-white");
            document.getElementById("navbarDropdownMenuLink").style.color="white"
            document.getElementById("nav-learn").style.color="white"
            document.getElementById("nav-docs").style.color="white"
            document.getElementById("nav-packages").style.color="white"
            document.getElementById("nav-community").style.color="white"
            
         }
        
    });
    var x = 0;

    $("#nav-button").click(function () {
        
            

            console.log("button")
            x=1;
       
     });
  });
