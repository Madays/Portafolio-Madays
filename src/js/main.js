$(document).ready(init);
var currentSection = null;
var currentGameId;
function init()
{	
    currentSection = $('#section-start');
    $('#start').click(onClickBtnStart);
    $('#about-me').click(onClickBtnAboutMe);
    $('#skill').click(onClickBtnSkill);
    $('#projects').click(onClickBtnProjects);
    $('#contact-me').click(onClickBtnContactMe);
}
function onClickBtnStart(){
    gotoSection('section-start');
}
function onClickBtnAboutMe(){
    gotoSection('section-about-me');
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