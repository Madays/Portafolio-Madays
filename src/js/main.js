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
    $('#start').click(onClickBtnStart);
    $('#about-me').click(onClickBtnAboutMe);
    $('#skill').click(onClickBtnSkill);
    $('#projects').click(onClickBtnProjects);
    $('#contact-me').click(onClickBtnContactMe);
    /*---END--Funciones de paginación-----*/
}
/*-----Funcione animacion de menu-----*/
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

