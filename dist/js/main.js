$(document).ready(init);
var currentSection = null;
var currentGameId;
function init()
{	    
    /*-----Funciones animacion de menu-----*/
    loadLinkMenu();
    /*---END--Funciones animacion de menu-----*/
    
    /*-----Funciones de paginación-----*/
    currentSection = $('#section-start');
    $('#particle-canvas').mouseover(onMouseSecStart);
    $('#start').click(onClickBtnStart);
    $('#menu').mouseover(onMouseMenu);
    $('#menu').mouseleave(leaveMouseMenu);
    $('#about-me').click(onClickBtnAboutMe);
    $('#skill').click(onClickBtnSkill);
    $('#projects').click(onClickBtnProjects);
    $('#contact-me').click(onClickBtnContactMe);
    /*---END--Funciones de paginación-----*/
}
/*-----Funcione animacion de menu-----*/
function onMouseMenu(evt){
    switch(evt.target.id){
        case 'start':
            $('li#start').css('width','100px');
            $('li#start').text('INICIO');
            break;
        case 'about-me':
            $('li#about-me').css('width','100px');
            $('li#about-me').text('SOBRE MI');
            break;        
    }
}
function leaveMouseMenu(evt){
    switch(evt.target.id){
        case 'start':
            $('li#start').css('width','10px');
            $('li#start').text('');
            break;
        case 'about-me':
            $('li#about-me').css('width','10px');
            $('li#about-me').text('');
            break;        
    }
}
function writeTextMenu(){
    $('#start').text('INICIO');
}
function loadLinkMenu(){
    setInterval(function(){
        $('ul#menu').css('opacity','1');
    },550);
    setInterval(function(){
        $('li#about-me').addClass('slideInRight');
    },500);
    setInterval(function(){
        $('li#skill').addClass('slideInRight');
    },600);
    setInterval(function(){
        $('li#projects').addClass('slideInRight');
    },700);
    setInterval(function(){
        $('li#contact-me').addClass('slideInRight');
    },800);
}
/*---END--Funcione animacion de menu-----*/
/*-----Funciones de paginación-----*/
function onClickBtnStart(){
    gotoSection('section-start');
}
function onClickBtnAboutMe(){
    gotoSection('section-about-me');
    animateAboutMe();
}
function onClickBtnSkill(){
    gotoSection('section-skill');
    move("myBarHTML5",90);
    move("myBarCss",90);
    move("myBarBootstrap",80);
    move("myBarJs",70);
    move("myBarJquery",70);
    move("myBarSass",80);
    move("myBarGithub",70);
    move("myBarGulp",70);
}
function onClickBtnProjects(){
    gotoSection('section-projects');
}
function onClickBtnContactMe(){
    gotoSection('section-contact-me');
}
function gotoSection(_identificadorDeSeccion)
{
	currentSection.removeClass('visible');
	var nextSection = $('#'+_identificadorDeSeccion);

	nextSection.addClass('visible');

    //TweenMax.from(nextSection, 1.5, {scale:0.2, opacity:0, ease:Elastic.easeOut});
	currentSection = nextSection;
}
/*---END--Funciones de paginación-----*/

/*-----section#section-start-----*/
    function onMouseSecStart(){
        //alert('sdfg');
        //$('.cavas').css('transform','translate(10px,10px)');
    }
    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);
    parallax.enable();
    //parallax.disable();
    parallax.updateLayers(); // Useful for reparsing the layers in your scene if you change their data-depth value
    parallax.calibrate(false, true);
    parallax.invert(false, true);
    parallax.limit(false, 10);
    parallax.scalar(2, 8);
    parallax.friction(0.2, 0.8);
    parallax.origin(0.0, 1.0);
/*---END--section#section-start-----*/
/*-----section#about-me-----*/
    function animateAboutMe(){
        $('#section-about-me .content img').addClass('slideInDown');
        $('#section-about-me .content div.front').addClass('slideInDown');        
        $('#section-about-me .content .info .container_info div#awards').addClass('slideInUp');
        $('#section-about-me .content div.container-box-p').addClass('slideInUp');

        /*setInterval(function(){
            $('#section-about-me .content img').removeClass('slideInLeft');
            $('#section-about-me .content div.front').removeClass('slideInRight');
        },900);*/ 
    }
/*---END--section#about-me-----*/
/*-----section#skill-----*/
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
/*---END--section#skill-----*/
/*-----section-contact-me-----*/
    
/*---END--section-contact-me-----*/

