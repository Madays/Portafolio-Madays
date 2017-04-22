$(document).ready(function(){
    //timedText();
    $(".container-box-p p").fadeIn(); 
    move("myBarHTML5",90);
    move("myBarCss",90);    
    move("myBarJs",70);
    move("myBarJquery",70);
    move("myBarSass",80);
    move("myBarGithub",70);
    move("myBarGulp",70);
    
    move("myBarProactividad",98);
    move("myBarEquipo",90);
    move("myBarLiderazgo",70);
    move("myBarResponsabilidad",90);
    move("myBarEntuciasmo",90);
    move("myBarPensamiento",80);
    move("myBarPuntualidad",80);
});

/*------section.hero-----*/
/*Hola soy Maday Choque desarrolladora frontend*/
document.addEventListener('DOMContentLoaded',function(event){
  var dataText = ["MADAY CHOQUE DESARROLLADORA FRONTEND", "MADAY CHOQUE DESARROLLADORA FRONTEND", "MADAY CHOQUE DESARROLLADORA FRONTEND", "MADAY CHOQUE DESARROLLADORA FRONTEND", "MADAY CHOQUE DESARROLLADORA FRONTEND", "MADAY CHOQUE DESARROLLADORA FRONTEND"];
  console.log(dataText[0].length);
  function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
     document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 700);
    }
  }
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
     }
    if (i < dataText[i].length) {
     typeWriter(dataText[i], 0, function(){
       StartTextAnimation(i + 1);
     });
    }
  }
  StartTextAnimation(0);
});
/*function timedText(){
    var presentationHero = ['H','o','l','a',' ','s','o','y',' ','M','a','d','a','y',' ','C','h','o','q','u','e',' ','d','e','s','a','r','r','o','l','l','a','d','o','r','a',' ','f','r','o','n','t','e','n','d']; 
    for(var i=0 in presentationHero){
        setInterval(function(){
            $('section.hero h1').append(presentationHero[i]);   
            console.log($('section.hero h1').append(presentationHero[i]))   
        },1000)
    }    ;
}*/

/*-----------------MENU-----------------*/
$('header i.fa').click(function(){
    $(this).toggleClass('fa-bars');
    $('#menu').toggleClass('hidden');
    $('#menu-xs-sm').toggleClass('hidden');
});
$('#link-about-me').click(function(){
    $(".container-box-p p").css('display','none');
    $(".container-box-p p").fadeIn();    
});
                        
$('#link-skills').click(function(){
    move("myBarHTML5",90);
    move("myBarCss",90);    
    move("myBarJs",70);
    move("myBarJquery",70);
    move("myBarSass",80);
    move("myBarGithub",70);
    move("myBarGulp",70);
    
    move("myBarProactividad",98);
    move("myBarEquipo",90);
    move("myBarLiderazgo",70);
    move("myBarResponsabilidad",90);
    move("myBarEntuciasmo",90);
    move("myBarPensamiento",80);
    move("myBarPuntualidad",80);
});

function move(_id,_valor) {
  var elem = document.getElementById(_id);   
  var width = 10;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= _valor) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
    console.log(elem.textContent);
}

