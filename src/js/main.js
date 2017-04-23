$(document).ready(function(){                
    //about Me
    componentAboutMe();
    //skill
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

/*-----------------MENU-----------------*/
$('header i.fa').click(function(){
    $(this).toggleClass('fa-bars');
    $('#menu').toggleClass('hidden');
    $('#menu-xs-sm').toggleClass('hidden');
});
$('#link-about-me').click(function(){
    componentAboutMe();       
});

function componentAboutMe(){
    $('#about-me img').addClass('slideInLeft');
    $('#about-me div.front').addClass('slideInRight');
    
    setInterval(function(){
        $('#about-me img').removeClass('slideInLeft');
        $('#about-me div.front').removeClass('slideInRight');
    },900); 
}
                        
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

