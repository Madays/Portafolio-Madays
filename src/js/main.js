$(document).ready(function(){
    //move();
});
$('i.fa').click(function(){
    $(this).toggleClass('fa-bars');
    $('#menu').toggleClass('hidden');
    $('#menu-xs-sm').toggleClass('hidden');
});

$('#link-skills').click(function(){
    //move(100);
});

/*function move() {
  //var elem = document.getElementById("myBar");   
  /*var elem = $(".myBar");   
    console.log(elem);
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }*/
   /* var elem = $(".myBar");   
    console.log(elem);    
    var width = 1;
    var id = setInterval(frame, 20);
    function frame() { 
        for(var i=0;i<=elem.length;i++){
            if (width >= 100) {
              clearInterval(id);
            } else {
              width++; 
              elem[i].style.width = width + '%'; 
                console.log(elem[i]);  
            }
        }
    }              
}*/

